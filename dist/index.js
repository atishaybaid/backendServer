"use strict";

var _dev = _interopRequireDefault(require("./config/dev.js"));

var _express = _interopRequireDefault(require("express"));

var _db = require("./utils/db.js");

var _auth = require("./auth");

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _bodyParser.json)());
app.post('/signup', _auth.signup);

const start = async () => {
  try {
    await (0, _db.connectDb)();
  } catch (error) {
    console.log(error);
  }

  app.listen(_dev.default.port, () => {
    console.log(`server started on port ${_dev.default.port}`);
  });
};

start();
console.log(_dev.default);