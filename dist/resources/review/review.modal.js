"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reviewSchema = new _mongoose.default.Schema({
  contactId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true,
    ref: 'contact'
  },
  businessId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true,
    ref: 'business'
  },
  questions: {
    type: Array
  },
  answers: {
    type: Array
  },
  url: {
    required: true,
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
reviewSchema.pre('updateOne', function () {
  this.set({
    updatedAt: new Date()
  });
});

const Review = _mongoose.default.model('review', reviewSchema);

var _default = Review;
exports.default = _default;