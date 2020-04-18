import mongoose from 'mongoose';


const businessSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

businessSchema.methods.checkPassword = function (password) {

}

export const Business = mongoose.model('business', businessSchema);


