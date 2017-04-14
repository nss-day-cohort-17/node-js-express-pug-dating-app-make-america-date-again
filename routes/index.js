'use strict';

const {Router} = require('express');
const router = Router();

//public routes
router.use(require('./login'))
router.use(require('./register'))
router.use(require('./home'))
router.use(require('./logout'))
//login guard middleware that reroutes home if not registered
router.use((req, res, next) => {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/')
  }
});

//private routes
router.use(require('./responses'))
router.use(require('./likedUsers'))
// router.use(require('./logout'))
//in case myLikes route is actually needed
// router.use(require('./myLikes'))

module.exports = router;
