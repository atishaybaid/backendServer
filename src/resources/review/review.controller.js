import Review from "./review.modal.js";


export const generateReviewURl = async (req, res) => {
    const reqBody = req.body;
    try {
        if (!reqBody.contactId) {
            return res.status(400).send({ msg: 'contactId is missing' })
        }
        const review = await Review.create({ contactId: reqBody.contactId, businessId: req.business._id });
        const url = `http://localhost:5000/form?cid=${reqBody.contactId}?rid=${review._id}`;
        await Review.findByIdAndUpdate(review._id, { url: url }, { new: true }).exec();
        return res.status(200).send({ url: url });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }



}

export const getReviews = async (req, res) => {
    try {
        const businessId = req.business._id;
        const reviewList = await Review.find({ businessId: businessId }).sort({ updatedAt: -1 }).exec();
        res.status(200).send({ reviewList: reviewList });
    } catch (error) {
        return res.status(500).send({ msg: 'Internal server error' });
    }

}


export const addReviews = async (req, res) => {
    const reqBody = req.body;
    try {
        if (!req.body.questions || !reqBody.answers) {
            res.status(400).send({ msg: 'mandatory paramenters missing' })
        }

        if (!reqBody.rid || !reqBody.questions.length || !reqBody.answers.length) {
            res.status(400).send({ msg: 'mandatory paramenters missing' })
        }

        const review = await Review.findByIdAndUpdate(reqBody.rid, { questions: reqBody.questions, answers: reqBody.answers });
        res.status(200).send({ msg: 'reviews saved sucessfully' });
    } catch (error) {
        return res.status(500).send({ msg: 'Internal server error' });
    }

}