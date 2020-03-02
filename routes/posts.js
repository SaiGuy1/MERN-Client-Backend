const express = require('express')
const router = express.Router();
const mw = require('../middleware');
const ctrl = require('../controllers');

// PATH = '/api/v1/posts'

// Controller To Create Single Post
router.post('/create', mw.auth.verify, ctrl.posts.create);

// Controller To Show Single Route
router.get('/:id', mw.auth.verify, ctrl.posts.show);

module.exports = router;