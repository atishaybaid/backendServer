import config from "./config/dev.js";
import express from "express";
import { connectDb } from "./utils/db.js";
import { signup, login, validateRequest, editBusiness } from "./auth/index.js";
import { json } from 'body-parser'
import contactRouter from "./resources/contact/contact.router.js"
import questionRouter from "./resources/question/question.router.js"
import checkinRouter from "./resources/checkin/checkin.router.js"




const app = express();
app.use('/healthcheck', require('express-healthcheck')());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(json());


app.post('/signup', signup);
app.post('/login', login);
/**
 * public api,these apis are used without public
 */
app.use('/public/v1/question', questionRouter);

app.use('/api', validateRequest);

app.post('/api/business/edit', editBusiness);
app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/checkin', checkinRouter)




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



