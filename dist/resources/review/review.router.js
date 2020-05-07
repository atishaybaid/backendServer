"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _reviewController = require("./review.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const reviewRouter = router;
reviewRouter.post('/add', _reviewController.addReviews);
reviewRouter.get('/reviewUrl', _reviewController.generateReviewURl);
reviewRouter.get('/get', _reviewController.getReviews);
var _default = reviewRouter;
exports.default = _default;