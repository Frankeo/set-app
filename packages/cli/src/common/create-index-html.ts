import { fs } from "zx";
import { getIndexHtml } from "./paths.js";

const headsIndex = new Set([
  '<meta charset="UTF-8" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  '<link rel="stylesheet" href="./style.css" />',
]);

export const bodiesIndex = ['<div id="root">JS not activated!!</div>'];

const IndexContent = () => `<!DOCTYPE html>
      <html lang="en">
      <head>
      ${[...headsIndex].join("\n")}
      </head>
      <body>
      ${bodiesIndex.join("\n")}
      </body>
      </html>`;

export const createIndexHtml = (name: string) => {
  const indexHtmlFile = getIndexHtml(name);
  headsIndex.add(`<title>${name}</title>`);
  fs.createFileSync(indexHtmlFile);
  fs.writeFileSync(indexHtmlFile, IndexContent());
};
