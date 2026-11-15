import { describe, expect, it } from "vitest";
import { shouldShowIntro, shouldUseIntroScene } from "./intro-policy";

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
  it("uses the lightweight fallback on mobile", () => {
    expect(shouldUseIntroScene(true, false, false)).toBe(false);
  });
  it("avoids 3D when data saving is enabled", () => {
    expect(shouldUseIntroScene(false, true, false)).toBe(false);
  });
  it("does not load 3D for reduced motion", () => {
    expect(shouldUseIntroScene(false, false, true)).toBe(false);
  });
  it("retains 3D on desktop", () => {
    expect(shouldUseIntroScene(false, false, false)).toBe(true);
  });
});