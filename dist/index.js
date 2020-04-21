"use strict";

var _dev = _interopRequireDefault(require("./config/dev.js"));

var _express = _interopRequireDefault(require("express"));

var _db = require("./utils/db.js");

var _index = require("./auth/index.js");

var _bodyParser = require("body-parser");

var _contactController = _interopRequireDefault(require("./resources/contact/contact.controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _bodyParser.json)());
app.post('/signup', _index.signup);
app.post('/login', _index.login);
console.log("request arrived");
app.use('/api', _index.validateRequest);
app.post('/api/v1/contact', _contactController.default);

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