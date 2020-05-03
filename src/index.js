import config from "./config/dev.js";
import express from "express";
import { connectDb } from "./utils/db.js";
import { signup, login, validateRequest,editBusiness } from "./auth/index.js";
import { json } from 'body-parser'
import contactRouter from "./resources/contact/contact.router.js"
import questionRouter from "./resources/question/question.router.js"




const app = express();
app.use(json());


app.post('/signup', signup);
app.post('/login', login);
console.log("request arrived");
app.use('/api', validateRequest);
console.log(contactRouter);
app.post('/api/business/edit',editBusiness);
app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/question', questionRouter);

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

console.log(config);


