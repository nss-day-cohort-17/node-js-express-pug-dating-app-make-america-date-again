'use strict';

const { knex } = require('../database');
const users = require('./users.json');

console.log('users', users);

const userPromises = users.map(({name, email, password}) => {
  return knex('users').insert({name, email, password});
})


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(userPromises)
    });
};
