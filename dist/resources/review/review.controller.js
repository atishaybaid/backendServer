"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReviews = exports.generateReviewURl = void 0;

var _reviewModal = _interopRequireDefault(require("./review.modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateReviewURl = async (req, res) => {
  const reqBody = req.body;

  try {
    if (!reqBody.contactId) {
      return res.status(400).send({
        msg: 'contactId is missing'
      });
    }

    await _reviewModal.default.create({
      contactId: reqBody.contactId
    });
    const url = `http://localhost:3000/review?cid=${contactId}?rid=${review._id}`;
    const review = await _reviewModal.default.findByIdAndUpdate(review._id, {
      URL: url,
      businessId: req.business._id
    }, {
      new: true
    }).exec();
    return res.status(200).send({
      url: url
    });
  } catch (error) {
    return res.status(500).send({
      msg: 'Internal server error'
    });
  }
};

exports.generateReviewURl = generateReviewURl;

const addReviews = async (req, res) => {
  const reqBody = req.body;

  try {
    if (!req.body.questions || !reqBody.answers) {
      res.status(400).send({
        msg: 'mandatory paramenters missing'
      });
    }

    if (!reqBody.rid || !reqBody.questions.length || !reqBody.answers.length) {
      res.status(400).send({
        msg: 'mandatory paramenters missing'
      });
    }

    const review = await _reviewModal.default.findByIdAndUpdate(reqBody.rid, {
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