const express = require('express')
const router = express.Router();
const mw = require('../middleware');
const ctrl = require('../controllers');

// PATH = '/api/v1/posts'

// Controller To Show All Posts
// See README.
router.get('/', ctrl.posts.showAll);

// Controller To Show Single Post
router.get('/:id', ctrl.posts.show);
// Controller For Single User To Show All Of Their Own Posts
router.get('/userall', mw.auth.verify, ctrl.posts.userAllPosts);

// Controller To Create Single Post
router.post('/create', mw.auth.verify, ctrl.posts.create);



// Controller To Update Single Post
router.put('/:id', mw.auth.verify, ctrl.posts.update);

// Controller To Delete Single Post
router.delete('/:id', mw.auth.verify, ctrl.posts.destroy);


module.exports = router;
