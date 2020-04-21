"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactController = _interopRequireDefault(require("./contact.controller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = express.Router();
const contactRouter = router.post('/', _contactController.default);
var _default = contactRouter;
exports.default = _default;