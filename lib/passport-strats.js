'use strict'

const passport = require('passport');
const { Strategy } = require('passport-local');
const {knex} = require('../db/database');
const User = require('../models/users');

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  knex('users').where({id}).first()
  .then((user)=> done(null, user))
  .catch( (err) => done(err, null));
});

const localStrategy = new Strategy ({
  usernameField: 'email',
  passwordField: 'password'
}, (email, passwordStr, done) => {
  User.findOneByEmail(email)
  .then((user) => {
    if (user){
      console.log('user PS', user)
      return Promise.all([
        user,
        user.comparePass(passwordStr)
      ])
    }
    done(null, null, {msg: 'Email does not exist in our system'})
  })
  .then(([user, matches]) => {
    if(matches){
      done(null, user, { msg: 'Logged In' })
    }else{
      done(null, null, { msg: "Password didn't match" })
    }
  })
  .catch(done)
})

passport.use(localStrategy)
