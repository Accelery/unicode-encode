"use strict";
const atob = require("atob");
const btoa = require("btoa");

// Expects a Unicode string
function utoa(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

// Decodes an encoded URI.
function atou(str) {
  return decodeURIComponent(escape(atob(str)));
}

module.exports = {
  utoa,
  atou
};
