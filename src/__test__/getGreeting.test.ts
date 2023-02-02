import { describe, expect, it } from "@jest/globals";
import { getGreeting } from "../getGreeting";

describe("getGreeting", () => {
  it("should return Hello, John!", () => {
    expect(getGreeting("John")).toEqual("Hello, John!");
  });
});
