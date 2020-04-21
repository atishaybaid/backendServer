const router = express.Router();
import createContact from "./contact.controller.js"


const contactRouter = router.post('/', createContact);

export default contactRouter;