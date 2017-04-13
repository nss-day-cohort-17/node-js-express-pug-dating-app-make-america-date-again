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
    console.log('users',users, 'profile', profile);
	  res.render('index', {page: 'Home', users, profiles});
  })
  .catch((error)=>{
    throw error
  })
}

module.exports.show()
