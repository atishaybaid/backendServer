import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    title:{
        type:String
    },
    questionsId :{
        type : Array
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

})

const Template = mongoose.model('template',templateSchema);
export default Template;