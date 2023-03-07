import path from "path";
import { $, fs } from "zx";
import { NetlifyConfig, NetlifySiteInfo } from "./common/types.js";
import { dirName } from "./get-dir-name.js";
import randomWord from "random-word";
import { detectPackageManager } from "./common/package-manager.js";
import { getProjectPath } from "./common/paths.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";

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

export const setupGithubAction = async (name: string) => {
  //   await $`cd ${dirName()} ; yarn netlify login`;
  const netflifyToken = await getNetlifyToken();
  await $`cd ${name} ; gh secret set NETLIFY_TOKEN_SETAPP -b ${netflifyToken}`;
  const siteName = `${randomWord()}-${randomWord()}-${randomWord()}-${randomWord()}`;
  $.verbose = true;
  await $`cd ${dirName()} ; yarn netlify sites:create --name ${siteName} --disable-linking`;
  $.verbose = false;
  const siteId = await getSiteId(siteName);
  await $`cd ${name} ; gh secret set NETLIFY__SETAPP_SITE_ID -b ${siteId}`;
  const token = await $`gh auth token -h github.com`;
  await $`cd ${name} ; gh secret set GTIHUB_TOKEN -b ${token.stdout}`;
  await generateWorkflows(name);
  updatePackageJsonScripts(name, {
    ci: "yarn check-format && yarn lint && yarn typecheck && yarn coverage",
    "build-ci": "yarn coverage && yarn build",
  });
};
