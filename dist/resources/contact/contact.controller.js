"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactModal = _interopRequireDefault(require("./contact.modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
{
    "email" :"ramesh@gmial.com",
    "name":"Ramesh"
}

*/
const createContact = async (req, res) => {
  try {
    if (!req.body.email || !req.body.name) {
      return res.send(400).send({
        msg: 'mandatory fields missing'
      });
    }

    const contact = await _contactModal.default.create({
      name: req.name,
      email: req.email,
      businessId: req.businessId,
      id: req.id
    });
    return res.status(200).send({
      msg: 'contact create sucessfully'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      msg: 'Internal server error'
    });
  }
};

var _default = createContact;
exports.default = _default;