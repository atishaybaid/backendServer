"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dev = _interopRequireDefault(require("../config/dev.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectDb = (url = _dev.default.dbURL) => {
  return _mongoose.default.connect(url);
};

exports.connectDb = connectDb;