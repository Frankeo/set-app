import { $ } from "zx";
import { getSuccessMessage } from "./interface/messages.js";

const getLicense = async () => $`npm config get init-license`;

export const createGithubRepo = async (name: string, desc?: string) => {
  const license = await getLicense();
  try {
    await $`gh repo create ${name} --public --clone -d ${desc} -l ${license}`;
  } catch (error) {
    $.verbose = true;
    await $`gh auth login -w -p https -h github.com`;
    $.verbose = false;
    await $`gh repo create ${name} --public --clone -d ${desc} -l ${license}`;
  }
  getSuccessMessage("Created", `${name} on Github`);
};
