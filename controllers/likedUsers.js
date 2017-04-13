'use strict';

const User = require('../models/users');

module.exports.show = (req, res, next) => {
  User.getAllLikedUsers()
    .then((users) => {
      console.log('users', users[0].likedUsers);
      let userPromise = users[0].likedUsers
      userPromise = userPromise.map(id => {
        return User.forge({id: id}).fetch()
      })
      Promise.all(userPromise)
      .then((likedUsersArr)) => {
        res.render('likedUsers', {page: 'likedUsers', likedUsersArr})
      }
    })
}
