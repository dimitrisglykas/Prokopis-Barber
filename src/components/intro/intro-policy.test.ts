import { describe, expect, it } from "vitest";
import { shouldShowIntro } from "./intro-policy";

describe("first-load intro", () => {
  it("plays on the first visit in a session", () => {
    expect(shouldShowIntro(null, false)).toBe(true);
  });
  it("does not repeat after a reload in the same session", () => {
    expect(shouldShowIntro("1", false)).toBe(false);
  });
  it("does not play when reduced motion is requested", () => {
    expect(shouldShowIntro(null, true)).toBe(false);
  });
});