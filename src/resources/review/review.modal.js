import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema({
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'contact'
    },
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'business'
    },
    questions: {
        type: Array
    },
    answers: {
        type: Array
    },
    url: {
        type: String

    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});

reviewSchema.pre('updateOne', function () {
    this.set({ updatedAt: new Date() })
})




const Review = mongoose.model('review', reviewSchema);
export default Review;