"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRequest = exports.login = exports.signup = void 0;

var _business = require("../resources/business.modal");

var _jwtService = require("./jwtService");

const signup = async (req, res) => {
  console.log("request body");
  console.log(req.body);

  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      msg: 'email and password are mandatory'
    });
  }

  try {
    let business = await _business.Business.create(req.body);
    let token = (0, _jwtService.generateNewToken)(business);
    return res.status(201).send({
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

exports.signup = signup;

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        msg: 'need email and password'
      });
    }

    const business = await _business.Business.findOne({
      email: req.body.email
    }).select('email password').exec();

    if (business.password != req.body.password) {
      return res.status(401).send({
        msg: "email password combination is incorrect"
      });
    }

    return res.status(200).send({
      token: (0, _jwtService.generateNewToken)(business)
    });
    res.status(401).send({
      msg: "email doest not exists"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

exports.login = login;

const validateRequest = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || bearer.indexOf('Bearer ') == -1) {
    return res.status(401).send({
      msg: "Bearer token missing"
    });
  }

  let token = req.headers.authorization.split(' ')[1];
  let payload;

  try {
    payload = await (0, _jwtService.verifyToken)(token);
    console.log("payload");
    console.log(payload);
    const business = await _business.Business.findById(payload.sub).select('-password').exec();
    console.log("business");
    console.log(business);

    if (!business) {
      return res.status(401).end();
    }

    req.business = req;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      msg: "Bearer token not valid"
    });
  }
};

exports.validateRequest = validateRequest;