import express from "express";
const router = express.Router();
import { addReviews } from "./review.controller.js"


const reviewRouter = router;
reviewRouter.post('/add', addReviews);

export default reviewRouter;