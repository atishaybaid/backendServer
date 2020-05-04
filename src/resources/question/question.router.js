import express from "express";
const router = express.Router();
import { createQuestion, getQuestion } from "./question.controller.js"


const questionRouter = router;
questionRouter.post('/add', createQuestion);
questionRouter.get('/get', getQuestion);

export default questionRouter;