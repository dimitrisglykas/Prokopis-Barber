import { expect, it } from "vitest";
import { GOOGLE_REVIEW_COUNT } from "./site-facts";

it("uses the confirmed total of 86 Google reviews", () => {
  expect(GOOGLE_REVIEW_COUNT).toBe(86);
});