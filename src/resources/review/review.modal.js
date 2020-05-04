import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema({
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'contact'
    },
    questions: {
        type: Array
    },
    answers: {
        type: Array
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});

reviewSchema.pre('updateOne', function () {
    this.set({ updatedAt: new Date() })
})




const Review = mongoose.model('review', reviewSchema);
export default Review;