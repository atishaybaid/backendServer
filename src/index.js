import config from "./config/dev.js";
import express from "express";
import { connectDb } from "./utils/db.js";
import { signup, login, validateRequest } from "./auth/index.js";
import { json } from 'body-parser'
import contactRouter from "./resources/contact/contact.router.js"
import questionRouter from "./resources/question/question.router.js"
import reviewRouter from "./resources/review/review.router.js";




const app = express();
app.use(json());


app.post('/signup', signup);
app.post('/login', login);


app.use('/api', validateRequest);
app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/question', questionRouter);
app.use('/api/v1/review', reviewRouter)


const start = async () => {
    try {
        await connectDb();
    } catch (error) {
        console.log(error);
    }

    app.listen(config.port, () => {
        console.log(`server started on port ${config.port}`);
    })
}
start();



