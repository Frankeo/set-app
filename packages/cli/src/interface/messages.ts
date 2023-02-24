import { chalk, echo } from "zx";
import loading from "loading-cli";

export const getSuccessMessage = (action: string, text: string) => {
  echo`${chalk.green("✔️")}   ${chalk.green.underline(action)}   ${chalk
    .rgb(35, 236, 172)
    .bold(text)}`;
};

export const getWarningMessage = (action: string, text: string) => {
  echo`${chalk.rgb(255, 173, 51)("🔗")}   ${chalk
    .rgb(255, 173, 51)
    .underline(action)}   ${chalk.rgb(204, 0, 153).bold(text)}`;
};

export const getErrorMessage = (text: string) => {
  echo`🔥   ${chalk.rgb(244, 74, 38).underline("Error")}   ${chalk
    .rgb(244, 74, 38)
    .bold(text)}`;
};

export const generateLoader = (text: string) => {
  const loader = loading({
    text,
    interval: 100,
    frames: [
      "🕐 ",
      "🕑 ",
      "🕒 ",
      "🕓 ",
      "🕔 ",
      "🕕 ",
      "🕖 ",
      "🕗 ",
      "🕘 ",
      "🕙 ",
      "🕚 ",
    ],
  });

  return loader.start();
};

export const getSucessProjectMsg = (
  prefix: string,
  name: string,
  sufix: string
) => {
  echo`✨ ${chalk.bold(`${prefix} ${chalk.rgb(35, 236, 172)(name)} ${sufix}`)}`;
};
