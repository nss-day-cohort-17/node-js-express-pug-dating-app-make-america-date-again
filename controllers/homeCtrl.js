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

//need a create? Reference orderCtrl in pizza shack

module.exports.show = (req, res) => {
  Promise.all([getUsers(), getProfiles()])
  .then(([user, profiles])=>{
    //console.log('users',users, 'profile', profile);
	  res.render('index', {page: 'Home', users, profiles});
  })
  .catch((error)=>{
    throw error
  })
}

module.exports.show()
