import express from "express";
const router = express.Router();
import { createQuestion } from "./question.controller.js"


const questionRouter = router;
questionRouter.post('/add', createQuestion);

export default questionRouter;