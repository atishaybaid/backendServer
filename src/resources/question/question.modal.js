import mongoose from 'mongoose';


const questionSchema = new mongoose.Schema({
    text: {
        type: String
    }

})


const Question = mongoose.model('question', questionSchema);
export default Question;