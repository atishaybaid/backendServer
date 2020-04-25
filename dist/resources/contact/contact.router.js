"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _contactController = require("./contact.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const contactRouter = router;
contactRouter.post('/save', _contactController.createContact);
contactRouter.get('/get', _contactController.getContacts);
contactRouter.post('/update/:id', _contactController.updateContact);
contactRouter.post('/delete', _contactController.deleteContact);
var _default = contactRouter;
exports.default = _default;