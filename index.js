import { config } from "./config/dev.js";
import express from "express";

const app = express();

const start = () => {
    app.listen(config.port, () => {
        console.log(`server started on port ${config.port}`);
    })
}
start();

console.log(config);


