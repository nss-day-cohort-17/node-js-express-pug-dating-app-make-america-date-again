'use strict';

const {bookshelf} = require('./db/database');
const User = bookshelf.Model.extend({
  tableName: 'users'
});
module.exports = User;
