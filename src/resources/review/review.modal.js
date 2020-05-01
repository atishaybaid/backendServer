import mongoose from 'mongoose';

/*
{
    reviewId:'',
    customerId:'',
    questions:[list of ids],
    answer:[questionId1:'answer',questionId2:'answer'],
    reviewReceviewTimeStamp:"123456",
}
*/
const reviewSchema = new mongoose.Schema({
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'contact'
    },
    questions: {
        type: Array
    },
    answer: {
        type: Array
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

})


const Review = mongoose.model('review', reviewSchema);
export default Contact;