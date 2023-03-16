import path from "path";
import { $, fs, os } from "zx";
import {
  NetlifyAccountInfo,
  NetlifyConfig,
  NetlifySiteInfo,
} from "./common/types.js";
import { dirName } from "./get-dir-name.js";
import randomWord from "random-word";
import {
  detectPackageManager,
  execCommandManager,
} from "./common/package-manager.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const getNetlifyPath = () => {
  if (os.platform() == "darwin") return "~/Library/Preferences/netlify";
  else if (os.platform() == "win32")
    return "~\\AppData\\Roaming\\netlify\\Config";
  else return "~/.config/netlify";
};

const getNetlifyToken = async () => {
  const absolutePath = await $`cd ${getNetlifyPath()} ; pwd`;
  const configNetlify = fs.readJSONSync(
    path.join(absolutePath.stdout.trim(), "config.json")
  ) as NetlifyConfig;
  return configNetlify.users[configNetlify.userId].auth.token;
};

const getSiteId = async (siteName: string) => {
  const execCommand = await execCommandManager();
  const siteResponse =
    await $`cd ${dirName()} ; ${execCommand} netlify api listSites --data '{ "name": "${siteName}"}'`;
  const sitesInfo = JSON.parse(
    siteResponse.stdout.match(/\[(.|\n)*\]/)![0]
  ) as unknown as NetlifySiteInfo[];
  return sitesInfo[0].site_id;
};

const getAccountSlug = async () => {
  const execCommand = await execCommandManager();
  const accountsResponse =
    await $`cd ${dirName()} ; ${execCommand} netlify api listAccountsForUser`;
  const accountsInfo = JSON.parse(
    accountsResponse.stdout.match(/\[(.|\n)*\]/)![0]
  ) as unknown as NetlifyAccountInfo[];
  return accountsInfo[0].slug;
};

const generateWorkflows = async (name: string) => {
  const workflows = path.join(dirName(), "workflows");
  const manager = await detectPackageManager();
  const mainFilePath = path.join(workflows, `main-${manager}.yml`);
  const prFilePath = path.join(workflows, `pr-${manager}.yml`);
  const githubOutputPath = path.join(getProjectPath(name), ".github");
  fs.mkdirSync(githubOutputPath);
  const workflowOutputPath = path.join(githubOutputPath, "workflows");
  fs.mkdirSync(workflowOutputPath);
  fs.copyFileSync(mainFilePath, path.join(workflowOutputPath, "main.yml"));
  fs.copyFileSync(prFilePath, path.join(workflowOutputPath, "pr.yml"));
};

const logInNetlify = async () => {
  const execCommand = await execCommandManager();
  const isNotLogged = fs.existsSync(getNetlifyPath());
  if (isNotLogged) {
    $.verbose = true;
    await $`cd ${dirName()} ; ${execCommand} netlify login`;
    $.verbose = false;
  }
};

const setSecret = async (name: string, secret: string, value: string) =>
  $`cd ${name} ; gh secret set ${secret} -b ${value}`;

export const setupGithubAction = async (name: string) =>
  getTaskWrapper("Installing", "Installed", "Github Actions", async () => {
    const execCommand = await execCommandManager();
    await logInNetlify();
    const netflifyToken = await getNetlifyToken();
    await setSecret(name, "NETLIFY_TOKEN_SETAPP", netflifyToken);
    const siteName = `${randomWord()}-${randomWord()}-${randomWord()}-${randomWord()}`;
    const slug = await getAccountSlug();
    await $`cd ${dirName()} ; ${execCommand} netlify api createSite --data '{ "account_slug": "${slug}",  "name": "${siteName}" }'`;
    const siteId = await getSiteId(siteName);
    await setSecret(name, "NETLIFY__SETAPP_SITE_ID", siteId);
    const token = await $`gh auth token -h github.com`;
    await setSecret(name, "GTIHUB_TOKEN", token.stdout);
    await generateWorkflows(name);
    updatePackageJsonScripts(name, {
      ci: `${execCommand} check-format && ${execCommand} lint && ${execCommand} typecheck && ${execCommand} coverage`,
      "build-ci": `${execCommand} coverage && ${execCommand} build`,
    });
  });
