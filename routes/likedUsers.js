'use strict';

const { Router } = require('express');
const show = require('../controllers/likedUsers');

const router = Router()

router.get('/likedUsers', show)

module.exports = router
