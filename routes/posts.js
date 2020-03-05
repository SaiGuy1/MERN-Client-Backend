const express = require('express')
const router = express.Router();
const mw = require('../middleware');
const ctrl = require('../controllers');

// PATH = '/api/v1/posts'

// Controller To show Post for related location
router.get('/city/:id', ctrl.posts.showcity)

// Controller To Show All Posts (Regardless Of User)
router.get('/', ctrl.posts.showAll);

// Controller To Show Single Post
router.get('/:id', ctrl.posts.show);
// Controller For Single User To Show All Of Their Own Posts
router.get('/userall', mw.auth.verify, ctrl.posts.userAllPosts);

// Controller To Create Single Post
router.post('/create', mw.auth.verify, ctrl.posts.create);






module.exports = router;
