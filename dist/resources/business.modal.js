"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Business = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const businessSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

businessSchema.methods.checkPassword = function (password) {};

const Business = _mongoose.default.model('business', businessSchema);

exports.Business = Business;