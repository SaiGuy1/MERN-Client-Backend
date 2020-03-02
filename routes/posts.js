const router = express.Router();
const mw = require('../middleware');
const ctrl = require('../controllers');

// PATH = '/api/v1/posts'

// Controller To Create Single Post
router.post('/', mw.auth.verify, ctrl.posts.create);

module.exports = router;