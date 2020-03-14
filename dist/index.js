"use strict";

var _dev = require("./config/dev.js");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const start = () => {
  app.listen(_dev.config.port, () => {
    console.log(`server started on port ${_dev.config.port}`);
  });
};

start();
console.log(_dev.config);