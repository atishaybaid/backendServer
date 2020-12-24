import mongoose from 'mongoose';


const questionSchema = new mongoose.Schema({
    text: {
        type: String
    },
    type: {
        type: String,
        required: true
    }

})


const Question = mongoose.model('question', questionSchema);
export default Question;