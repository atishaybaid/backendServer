"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactSchema = new _mongoose.default.Schema({
  id: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  businessId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true,
    ref: 'business'
  },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: Number
  }
});

const Contact = _mongoose.default.model('contact', contactSchema);

exports.Contact = Contact;