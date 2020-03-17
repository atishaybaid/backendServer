"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = void 0;

var _user = require("../resources/user.modal");

const signup = async (req, res) => {
  console.log("request body");
  console.log(req.body);

  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      msg: 'email and password are mandatory'
    });
  }

  try {
    await _user.User.create(req.body);
    return res.status(201).send({
      success: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

exports.signup = signup;