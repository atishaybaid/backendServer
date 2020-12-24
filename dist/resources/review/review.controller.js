"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReviews = exports.getReviews = exports.generateReviewURl = void 0;

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

    const review = await _reviewModal.default.create({
      contactId: reqBody.contactId,
      businessId: req.business._id
    });
    const url = `http://localhost:3000/review?cid=${reqBody.contactId}?rid=${review._id}`;
    await _reviewModal.default.findByIdAndUpdate(review._id, {
      url: url
    }, {
      new: true
    }).exec();
    return res.status(200).send({
      url: url
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      msg: 'Internal server error'
    });
  }
};

exports.generateReviewURl = generateReviewURl;

const getReviews = async (req, res) => {
  try {
    const businessId = req.business._id;
    const reviewList = await _reviewModal.default.find({
      businessId: businessId
    }).sort({
      updatedAt: -1
    }).exec();
    res.status(200).send({
      reviewList: reviewList
    });
  } catch (error) {
    return res.status(500).send({
      msg: 'Internal server error'
    });
  }
};

exports.getReviews = getReviews;

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