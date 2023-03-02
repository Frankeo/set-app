import { chalk, echo } from "zx";
import loading from "loading-cli";

export const getSuccessMessage = (action: string, text: string) => {
  echo`✅   ${chalk.green.underline(`${action}:`)}   ${chalk.green.bold(text)}`;
};

export const getLoadingMessage = (action: string, text: string) =>
  generateLoader(
    `${chalk.rgb(101, 174, 247).underline(`${action}:`)}   ${chalk
      .rgb(101, 174, 247)
      .bold(text)}`
  );

export const getErrorMessage = (text: string) =>
  `🔥   ${chalk.rgb(244, 74, 38).underline("Error:")}   ${chalk
    .rgb(244, 74, 38)
    .bold(text)}`;

const generateLoader = (text: string) => {
  const loader = loading({
    text,
    interval: 160,
    frames: ["🤘  ", "🤟  ", "🖖  ", "✋  ", "🤚  ", "👆  "],
  });

  return loader.start();
};

export const getSucessProjectMsg = (
  prefix: string,
  name: string,
  sufix: string
) => {
  echo`✨   ${chalk.bold(
    `${prefix} ${chalk.rgb(35, 236, 172)(name)} ${sufix}`
  )}`;
};
