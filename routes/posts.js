const express = require('express')
const router = express.Router();
const mw = require('../middleware');
const ctrl = require('../controllers');

// PATH = '/api/v1/posts'

// Controller To Create Single Post
router.post('/create', mw.auth.verify, ctrl.posts.create);

// Controller To Show Single Post
router.get('/:id', mw.auth.verify, ctrl.posts.show);

// Controller To Show All User's Posts
router.get('/', mw.auth.verify, ctrl.posts.showAll);

module.exports = router;