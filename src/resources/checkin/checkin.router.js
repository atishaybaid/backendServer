import express from "express";
const router = express.Router();
import { submitCheckin, getCheckin, deleteCheckin } from "./checkin.controller.js"


const checkinRouter = router;
checkinRouter.post('/save', submitCheckin);
checkinRouter.get('/get', getCheckin);
checkinRouter.post('/delete', deleteCheckin);


export default checkinRouter;