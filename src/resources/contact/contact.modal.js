import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,

    },
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'business'
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number

    }

})


export const Contact = mongoose.model('contact', contactSchema);
