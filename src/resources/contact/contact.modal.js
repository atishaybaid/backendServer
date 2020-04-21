import mongoose from 'mongoose';


const contactSchema = new mongoose.Schema({
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


const Contact = mongoose.model('contact', contactSchema);
export default Contact;
