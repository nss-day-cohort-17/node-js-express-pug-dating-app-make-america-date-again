'use strict';

const { knex } = require('../db/database')
const Users = () => knex('users');
const Profile = () => knex('responses')

const getUsers = ()=>{
  return Users().select()
  .then(rows => {
    //console.log(rows);
    return rows
  })
  .catch(error =>{
    throw error
  })
}
const getProfiles = () =>{
  return Profile().select()
  .then(rows => {
    //console.log(rows);
    return rows
  })
  .catch(error => {
    throw error
  })
}

//need a create? Reference orderCtrl in pizza shack

module.exports.show = (req, res) => {
  Promise.all([getUsers(), getProfiles()])
  .then(([users, profiles])=>{
    //console.log('users',users, 'profile', profile);
	  res.render('index', {page: 'Home', users, porfiles});
  })
  .catch((error)=>{
    throw error
  })
}
