'use strict';

const passport = require('passport');

module.exports.show = (req, res) =>
  res.render('register');

module.exports.create = ({body: {email, password, confirmation}}, res) => {
  console.log("user.js cont", email, password);
  if (password === confirmation){
    User.findOneByEmail(email)
    .then((user)=> {
      if (user) return res.render('register-login', {msg: 'Email is already registered', page: 'Register'})
      return User.forge({email, password})
      .save()
      .then(()=>{
        res.redirect('/')
      })
      .catch( () => res.render('register-login', {msg: "probs on the save", page: 'Register'}))
    })
    .catch(()=>res.render('register-login', {msg: "probs on the save", page: 'Register'}))
  }else(
    res.render('register-login', {msg: "Oops passwords didn't match", page: 'Register'})
  )
}
