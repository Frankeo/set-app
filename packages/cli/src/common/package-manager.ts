import { $ } from "zx";

const checkGlobalInstallation = async (pm: string) => {
  try {
    await $`${pm} --version`;
    return true;
  } catch (error) {
    return false;
  }
};

let detectedPM = "";

const detectPackageManager = async () => {
  if (detectedPM) return detectedPM;
  const hasYarn = await checkGlobalInstallation("yarn");
  if (hasYarn) detectedPM = "yarn";
  else detectedPM = "npm";
  return detectedPM;
};

export const addDependency = async (dependency: string | string[]) => {
  const pm = await detectPackageManager();
  const result = Array.isArray(dependency) ? dependency.join(" ") : dependency;
  if (pm == "npm") {
    return `${pm} install ${result}`;
  } else {
    return `${pm} add ${result}`;
  }
};

export const addDevDependency = async (dependency: string | string[]) => {
  const pm = await detectPackageManager();
  const result = Array.isArray(dependency) ? dependency.join(" ") : dependency;
  if (pm == "npm") {
    return `${pm} install --save-dev ${result}`;
  } else {
    return `${pm} add -D ${result}`;
  }
};
