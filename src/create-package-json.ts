import { $ } from "zx";

export const createPackageJson = async (projectDirectory: string) => {
  await $`cd ${projectDirectory} ; npm init -y ;`;
};
