import express from "express";
const router = express.Router();
import { addReviews, generateReviewURl, getReviews } from "./review.controller.js"


const reviewRouter = router;

reviewRouter.post('/add', addReviews);
reviewRouter.get('/reviewUrl', generateReviewURl);
reviewRouter.get('/get', getReviews);


export default reviewRouter;