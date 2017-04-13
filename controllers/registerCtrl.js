'use strict';

const User = require('../models/users')
const passport = require('passport');

module.exports.show = (req, res) =>
  res.render('register');

module.exports.create = ({body: {name, email, password, confirmation}}, res) => {
  console.log("user", name, email, password);
  if (password === confirmation){
    console.log(email);
    User.findOneByEmail(email)
    .then((user)=> {
      if (user) return res.render('register', {msg: 'Email is already registered', page: 'Register'})
      return User.forge({name, email, password})
      .save()
      .then(()=>{
        res.redirect('/questions')
      })
      .catch( () => res.render('register-login', {msg: "probs on the save", page: 'Register'}))
    })
    .catch(()=>res.render('register-login', {msg: "probs on the save", page: 'Register'}))
  }else(
    res.render('register-login', {msg: "Oops passwords didn't match", page: 'Register'})
  )
}
