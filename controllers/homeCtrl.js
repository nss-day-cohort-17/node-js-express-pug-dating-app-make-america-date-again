'use strict';

const { knex } = require('../db/database')
const Users = require('../models/users');
const Profile = require('../models/responses')

const getUsers = ()=>{
  return Users.forge().fetchAll()
  .then(rows => {
    console.log(rows.toJSON());
    return rows.toJSON()
  })
  .catch(error =>{
    throw error
  })
}
const getProfiles = () =>{
  return Profile.forge().fetchAll()
  .then(rows => {
    console.log(rows.toJSON());
    return rows.toJSON()
  })
  .catch(error => {
    throw error
  })
}

module.exports.show = (req, res) => {
  Promise.all([getUsers(), getProfiles()])
  .then(([users, profiles])=>{
    console.log('im a session', req.session)
    console.log('im a user', req.user.name)
    // console.log('users',users, 'profile', profiles);
	  res.render('index', {page: 'Home', user:req.user, users, profiles});
  })
  .catch((error)=>{
    throw error
  })
}

module.exports.addLikes = (req, res, err) => {
  console.log('body', req.body)
  const likes = req.body.likes;
  req.body.likes = likes && typeof(likes) == 'string' ? [likes] : likes;
  Profile.forge(req.body)
  .save()
  .then((likesObj) => {
    console.log('im likes', likesObj)
    res.redirect('/likedUsers')
  })
  .catch(err)
}
