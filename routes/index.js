'use strict';

const {Router} = require('express');
const router = Router();

//public routes
router.use(require('./login-register'))

//login guard middleware that reroutes home if not registered
router.use((req, res, next) => {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/index')
  }
});

//private routes
router.use(require('./logout'))
//in case myLikes route is actually needed
// router.use(require('./myLikes'))

module.exports = router;
