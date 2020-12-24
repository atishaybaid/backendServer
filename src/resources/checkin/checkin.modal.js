import mongoose from 'mongoose';
const checkinSchema = new mongoose.Schema({
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'business'
    },
    responseList: {
        type: Array,
        required: true,

    },
    submittedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});

checkinSchema.pre('updateOne', function () {
    this.set({ updatedAt: new Date() })
})




const Checkin = mongoose.model('checkin', checkinSchema);
export default Checkin;