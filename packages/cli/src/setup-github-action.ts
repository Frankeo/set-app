import path from "path";
import { $, fs } from "zx";
import {
  NetlifyAccountInfo,
  NetlifyConfig,
  NetlifySiteInfo,
} from "./common/types.js";
import { dirName } from "./get-dir-name.js";
import randomWord from "random-word";
import { detectPackageManager } from "./common/package-manager.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const getNetlifyToken = async () => {
  const absolutePath = await $`cd ~/Library/Preferences/netlify ; pwd`;
  const configNetlify = fs.readJSONSync(
    path.join(absolutePath.stdout.trim(), "config.json")
  ) as NetlifyConfig;
  return configNetlify.users[configNetlify.userId].auth.token;
};

const getSiteId = async (siteName: string) => {
  const siteResponse =
    await $`cd ${dirName()} ; yarn netlify api listSites --data '{ "name": "${siteName}"}'`;
  const sitesInfo = JSON.parse(
    siteResponse.stdout.match(/\[(.|\n)*\]/)![0]
  ) as unknown as NetlifySiteInfo[];
  return sitesInfo[0].site_id;
};

const getAccountSlug = async () => {
  const accountsResponse =
    await $`cd ${dirName()} ; yarn netlify api listAccountsForUser`;
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
  const statusResponse = await $`cd ${dirName()} ; yarn netlify status`;
  const isNotLogged = Boolean(
    statusResponse.stdout.match(/("netlify login")/)?.length
  );
  if (isNotLogged) await $`cd ${dirName()} ; yarn netlify login`;
};

const setSecret = async (name: string, secret: string, value: string) =>
  $`cd ${name} ; gh secret set ${secret} -b ${value}`;

export const setupGithubAction = async (name: string) =>
  getTaskWrapper("Installing", "Installed", "Github Actions", async () => {
    await logInNetlify();
    const netflifyToken = await getNetlifyToken();
    await setSecret(name, "NETLIFY_TOKEN_SETAPP", netflifyToken);
    const siteName = `${randomWord()}-${randomWord()}-${randomWord()}-${randomWord()}`;
    const slug = await getAccountSlug();
    await $`cd ${dirName()} ; yarn netlify sites:create --account-slug ${slug} --name ${siteName} --disable-linking`;
    const siteId = await getSiteId(siteName);
    await setSecret(name, "NETLIFY__SETAPP_SITE_ID", siteId);
    const token = await $`gh auth token -h github.com`;
    await setSecret(name, "GTIHUB_TOKEN", token.stdout);
    await generateWorkflows(name);
    updatePackageJsonScripts(name, {
      ci: "yarn check-format && yarn lint && yarn typecheck && yarn coverage",
      "build-ci": "yarn coverage && yarn build",
    });
  });
