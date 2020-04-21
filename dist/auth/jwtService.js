"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateNewToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dev = _interopRequireDefault(require("../config/dev.js"));

var _upath = require("upath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateNewToken = business => {
  return _jsonwebtoken.default.sign({
    sub: business.id,
    email: business.email
  }, _dev.default.jwkKey, {
    algorithm: 'HS256',
    expiresIn: '1h'
  });
};

exports.generateNewToken = generateNewToken;

const verifyToken = token => {
  return new Promise((resolve, reject) => {
    _jsonwebtoken.default.verify(token, _dev.default.jwkKey, {
      algorithm: 'HS256'
    }, (err, payload) => {
      if (err) {
        reject(err);
      }

      resolve(payload);
    });
  });
};

exports.verifyToken = verifyToken;