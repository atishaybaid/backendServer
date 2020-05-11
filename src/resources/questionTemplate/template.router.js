import express from "express";
const templateRouter = express.Router();
import {getTemplate,addTemplate} from "./template.controller.js";
templateRouter.get('/get',getTemplate);
templateRouter.post('/add',addTemplate);
export default templateRouter;
