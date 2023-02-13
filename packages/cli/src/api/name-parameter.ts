import { argv, question } from "zx";

export const getProjectName = async () => {
  const parameters = argv._;
  const name =
    parameters && parameters.length
      ? parameters[0]
      : await question("Which one is the project name?");

  if (!name) throw new Error("No name provided");
  return name;
};
