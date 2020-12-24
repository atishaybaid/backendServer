"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const questionSchema = new _mongoose.default.Schema({
  text: {
    type: String
  },
  type: {
    type: String,
    required: true
  }
});

const Question = _mongoose.default.model('question', questionSchema);

var _default = Question;
exports.default = _default;