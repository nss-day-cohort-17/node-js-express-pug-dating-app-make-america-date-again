'use strict';

const { knex } = require('../db/database')
const Users = require('../models/users');
const Profile = require('../models/responses')

const getUsers = () => {
  return Users.forge().fetchAll()
  .then(rows => {
    // console.log(rows.toJSON());
    return rows.toJSON()
  })
  .catch(error =>{
    throw error
  })
}
const getProfiles = () =>{
  return Profile.forge().fetchAll()
  .then(rows => {
    // console.log(rows.toJSON());
    return rows.toJSON()
  })
  .catch(error => {
    throw error
  })
}

//need a create? Reference orderCtrl in pizza shack

module.exports.show = (req, res) => {
  Promise.all([getUsers(), getProfiles()])
  .then(([users, profiles])=>{
    console.log('im a session', req.session)
    // console.log('im a user', req.user.name)
    // console.log('users',users, 'profile', profiles);
	  res.render('index', {page: 'Home', user:req.user, users, profiles});
  })
  .catch((error)=>{
    throw error
  })
}

module.exports.addLikes = (req, res, err) => {
  const likes = req.body.likes;
  req.body.likes = likes && typeof(likes) == 'string' ? [likes] : likes;
  console.log('body', likes)
  // Profile.forge(likes)
  // .save({'likes', likes, {method:'update'})
  // .then((likesObj) => {
  //   console.log('im likes', likesObj)
  //   res.redirect('/likedUsers')
  // })
  // .catch(err)

}
