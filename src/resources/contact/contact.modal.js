import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'business'
    },
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        trim: true,
        unique: true

    }

})


const Contact = mongoose.model('contact', contactSchema);
export default Contact;
