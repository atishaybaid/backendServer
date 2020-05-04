import Question from "./question.modal.js"

export const createQuestion = (req, res) => {
    try {
        let reqBody = req.body;
        if (!reqBody.questions) {
            return res.status(400).send({ msg: 'questions array is missing' })
        }

        if (!reqBody.questions.length) {
            return res.status(400).send({ msg: 'questions array is empty' })
        }

        Question.insertMany(reqBody.questions);

        return res.status(200).send({ msg: 'questions inserted sucessfully' });
    } catch (error) {
        return res.status(500).send({ msg: 'Internal server error' });
    }

}


export const getQuestion = async (req, res) => {


    try {
        const data = await Question.find({});



        return res.status(200).send({ questions: data });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }


}



