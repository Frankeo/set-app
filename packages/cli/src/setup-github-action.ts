import path from "path";
import { $, fs, os } from "zx";
import { VercelConfig, VercelProjectConfig } from "./common/types.js";
import { dirName } from "./get-dir-name.js";
import {
  detectPackageManager,
  execCommandManager,
} from "./common/package-manager.js";
import { getProjectPath, getVercelConfig } from "./common/paths.js";
import { updatePackageJsonScripts } from "./common/update-package-json-script.js";
import { getTaskWrapper } from "./interface/task-wrapper.js";

const getVercelPath = () => {
  if (os.platform() == "darwin")
    return "~/Library/Application Support/com.vercel.cli";
  else if (os.platform() == "win32")
    return "%APPDATA%\\Roaming\\xdg.data\\com.vercel.cli";
  else return "~/.local/share/com.vercel.cli";
};

const getVercelToken = async () => {
  const absolutePath = await $`cd ${getVercelPath()} ; pwd`;
  const configVercel = fs.readJSONSync(
    path.join(absolutePath.stdout.trim(), "auth.json")
  ) as VercelConfig;
  return configVercel.token;
};

const getProjectConfig = (name: string) =>
  fs.readJSONSync(getVercelConfig(name)) as VercelProjectConfig;

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

const loginVercel = async () => {
  const isAuthenticated = fs.existsSync(getVercelPath());
  if (!isAuthenticated) {
    $.verbose = true;
    await $`vercel login --github`;
    $.verbose = false;
  }
};

const setSecret = async (name: string, secret: string, value: string) =>
  $`cd ${name} ; gh secret set ${secret} -b ${value}`;

export const setupGithubAction = async (
  name: string,
  github: boolean,
  deploy: boolean
) => {
  if (!github || !deploy) return;
  await getTaskWrapper(
    "Installing",
    "Installed",
    "Github Actions",
    async () => {
      const execCommand = await execCommandManager();
      await loginVercel();
      const vercelToken = await getVercelToken();
      await setSecret(name, "VERCEL_TOKEN", vercelToken);
      await $`cd ${getProjectPath(name)} ; vercel git connect --yes`;
      const { orgId, projectId } = getProjectConfig(name);
      await setSecret(name, "ORG_ID", orgId);
      await setSecret(name, "PROJECT_ID", projectId);
      const token = await $`gh auth token -h github.com`;
      await setSecret(name, "GTIHUB_TOKEN", token.stdout);
      await generateWorkflows(name);
      $.verbose = false;
      updatePackageJsonScripts(name, {
        ci: `${execCommand} check-format && ${execCommand} lint && ${execCommand} typecheck && ${execCommand} coverage`,
        "build-ci": `${execCommand} coverage && ${execCommand} build`,
      });
    }
  );
};
