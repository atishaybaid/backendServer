const router = express.Router();

const contactController = router.post('/', createContact);

export default contactRouter;