import mongoose from 'mongoose';
import config from '../config/dev.js';



export const connectDb = (url = config.dbURL) => {

    return mongoose.connect(
        url
    )
}



