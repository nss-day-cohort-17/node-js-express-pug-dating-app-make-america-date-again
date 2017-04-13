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

module.exports.show = (req, res) => {
  Promise.all([getUsers(), getProfiles()])
  .then(([users, profiles])=>{
    console.log('users',users, 'profile', profiles);
	  res.render('index', {page: 'Home', users, profiles});
  })
  .catch((error)=>{
    throw error
  })
}
