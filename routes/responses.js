'use strict';

const {Router} = require('express');

const { create, show } = require('../controllers/responsesCtrl');

const router = Router();

router.get('/questions', show)
router.post('/questions', create);

module.exports = router;
