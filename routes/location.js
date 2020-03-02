const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const mw = require('../middleware');
// PATH = /api/v1/users

// GET Profile by ID
router.get('/', ctrl.location.show);




module.exports = router;
