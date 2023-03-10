import { getLoadingMessage, getSuccessMessage } from "./messages.js";

export const getTaskWrapper = async (
  actionBefore: string,
  actionAfter: string,
  taskName: string,
  task: () => Promise<void>
) => {
  const loader = getLoadingMessage(actionBefore, taskName);
  await task();
  loader.stop();
  getSuccessMessage(actionAfter, taskName);
};
