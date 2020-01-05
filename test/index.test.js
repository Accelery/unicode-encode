var chai = require("chai");
var expect = chai.expect;

const { utoa, atou } = require("../index");

describe("Unicode-encode", () => {
  it("should encode-decode correctly", () => {
    var startString = "simple string";
    expect(atou(utoa(startString))).to.eql(startString);
  });
});
