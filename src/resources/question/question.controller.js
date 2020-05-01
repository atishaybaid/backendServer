import Question from "./question.modal.js"

export const createQuestion = (req, res) => {
    let reqBody = req.body;
    if (!reqBody.questions) {
        return res.status(400).send({ msg: 'questions array is missing' })
    }

    if (!reqBody.questions.length) {
        return res.status(400).send({ msg: 'questions array is empty' })
    }

    Question.insertMany(reqBody.questions);

    return res.status(200).send({ msg: 'questions inserted sucessfully' });


}


