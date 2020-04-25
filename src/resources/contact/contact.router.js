import express from "express";
const router = express.Router();
import { createContact, getContacts, updateContact, deleteContact } from "./contact.controller.js"


const contactRouter = router;
contactRouter.post('/save', createContact);
contactRouter.get('/get', getContacts);
contactRouter.post('/update/:id', updateContact);
contactRouter.post('/delete', deleteContact);


export default contactRouter;