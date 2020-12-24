import config from "./config/dev.js";
import express from "express";



const app = express();
app.get("/", (req, res) => {
    res.send("1st sever is up");
})

const start = async () => {


    app.listen(8080, () => {
        console.log(`server started on port ${config.port}`);
    })
}
start();



