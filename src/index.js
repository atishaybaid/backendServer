import config from "./config/dev.js";
import express from "express";
import { connectDb } from "./utils/db.js";
import { signup } from "./auth";
import { json } from 'body-parser'




const app = express();
app.use(json());


app.post('/signup', signup);

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


