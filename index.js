'use strict';
const atob = require('atob');
const btoa = require('btoa');

function utoa(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function atou(str) {
  return decodeURIComponent(escape(atob(str)));
}

module.exports = {
  utoa,
  atou
};
