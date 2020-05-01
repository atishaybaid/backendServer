"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
{
    reviewId:'',
    customerId:'',
    questions:[list of ids],
    answer:[questionId1:'answer',questionId2:'answer'],
    reviewReceviewTimeStamp:"123456",
}
*/
const reviewSchema = new _mongoose.default.Schema({
  contactId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true,
    ref: 'contact'
  },
  questions: {
    type: Array
  },
  answer: {
    type: Array
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

const Review = _mongoose.default.model('review', reviewSchema);

var _default = Contact;
exports.default = _default;