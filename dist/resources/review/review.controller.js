"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReviews = void 0;

var _reviewModal = _interopRequireDefault(require("./review.modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addReviews = async (req, res) => {
  const reqBody = req.body;

  try {
    if (!req.body.questions || !reqBody.answers) {
      res.status(400).send({
        msg: 'mandatory paramenters missing'
      });
    }

    if (!reqBody.contactId || !reqBody.questions.length || !reqBody.answers.length) {
      res.status(400).send({
        msg: 'mandatory paramenters missing'
      });
    }

    const review = await _reviewModal.default.create({
      contactId: reqBody.contactId,
      questions: reqBody.questions,
      answers: reqBody.answers
    });
    res.status(200).send({
      msg: 'reviews saved sucessfully'
    });
  } catch (error) {
    return res.status(500).send({
      msg: 'Internal server error'
    });
  }
};

exports.addReviews = addReviews;