import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { advisorInputSchema, advisorResultSchema } from "./haircut-advisor";

describe("haircut advisor", () => {
  test("accepts hair descriptions and preferred looks", () => {
    assert.deepEqual(advisorInputSchema.parse({ hair: " Σγουρά και πυκνά ", look: "Χαμηλό fade" }), { hair: "Σγουρά και πυκνά", look: "Χαμηλό fade" });
  });
  test("rejects missing descriptions before inference", () => {
    assert.equal(advisorInputSchema.safeParse({ hair: "", look: "Fade" }).success, false);
  });
  test("rejects services outside the haircut catalog", () => {
    assert.equal(advisorResultSchema.safeParse({ styles: [{ name: "Fade", reason: "Fit", upkeep: "Easy", serviceId: 20 }], barberNote: "Discuss" }).success, false);
  });
});