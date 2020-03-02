const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const mw = require('../middleware');
// PATH = /api/v1/users

// GET Profile by ID
router.get('/', mw.auth.verify, ctrl.users.show);
// Update profile by ID
router.put('/update', mw.auth.verify, ctrl.users.update);



module.exports = router;
