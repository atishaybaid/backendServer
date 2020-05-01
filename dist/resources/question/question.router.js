"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _questionController = require("./question.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const questionRouter = router;
questionRouter.post('/add', _questionController.createQuestion);
var _default = questionRouter;
exports.default = _default;