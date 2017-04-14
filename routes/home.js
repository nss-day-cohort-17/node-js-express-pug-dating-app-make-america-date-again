'use strict';

const { Router } = require('express');

const { show, addLikes } = require('../controllers/homeCtrl');
const router = Router();

router.get('/', show);
router.post('/', addLikes);

module.exports = router;
