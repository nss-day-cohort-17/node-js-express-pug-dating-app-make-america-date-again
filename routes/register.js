'use strict';

const {Router} = require('express');

const {show, create} = require('../controllers/registerCtrl');

const router = Router();

router.get('/register', show);
// router.post('/register', create);

module.exports = router;
