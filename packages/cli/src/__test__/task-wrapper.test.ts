import { describe, expect, test, vi } from "vitest";
import { getTaskWrapper } from "../interface/task-wrapper";
import { Loading } from "loading-cli";
import * as message from "../interface/messages.js";

vi.mock("../interface/messages.js");

describe("Testing getTaskWrapper", () => {
  const beforeAction = "BEFORE-ACTION";
  const afterAction = "AFTER-ACITON";
  const taskName = "TASK-NAME";
  const spyLoadingMessage = vi
    .spyOn(message, "getLoadingMessage")
    .mockImplementation(
      () =>
        ({
          stop: vi.fn(),
        } as unknown as Loading)
    );
  test("should call loading message at the start", async () => {
    await getTaskWrapper(beforeAction, afterAction, taskName, vi.fn());
    expect(spyLoadingMessage).toHaveBeenCalledOnce();
    expect(spyLoadingMessage).toHaveBeenCalledWith(beforeAction, taskName);
  });
  test("should execute the task that we pass", async () => {
    const task = vi.fn();
    await getTaskWrapper(beforeAction, afterAction, taskName, task);
    expect(task).toHaveBeenCalledOnce();
  });
  test("should call success message at the end", async () => {
    const spySuccessMessage = vi.spyOn(message, "getSuccessMessage");
    await getTaskWrapper(beforeAction, afterAction, taskName, vi.fn());
    expect(spySuccessMessage).toHaveBeenCalledOnce();
    expect(spySuccessMessage).toHaveBeenCalledWith(afterAction, taskName);
  });
});
