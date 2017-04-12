'use strict';

//init bookshelf in separate file to create 2-way flow of data
const knex = require('knex')(dbConfig);
module.exports = require('bookshelf')(knex);
