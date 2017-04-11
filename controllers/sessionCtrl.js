'use strict';

const passport = require('passport');
module.exports.show = (req, res) =>
  res.render('login', {page: 'Login'});
 
