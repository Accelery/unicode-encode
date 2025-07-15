import { expect } from "chai";
import { atou, utoa } from "../index";

describe("Unicode-encode", () => {
  it("should encode-decode correctly", () => {
    const startString = "simple string";
    expect(atou(utoa(startString))).to.eql(startString);
  });
});
