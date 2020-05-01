"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuestion = void 0;

var _questionModal = _interopRequireDefault(require("./question.modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createQuestion = (req, res) => {
  let reqBody = req.body;

  if (!reqBody.questions) {
    return res.status(400).send({
      msg: 'questions array is missing'
    });
  }

  if (!reqBody.questions.length) {
    return res.status(400).send({
      msg: 'questions array is empty'
    });
  }

  _questionModal.default.insertMany(reqBody.questions);

  return res.status(200).send({
    msg: 'questions inserted sucessfully'
  });
};

exports.createQuestion = createQuestion;