'use strict';

const {bookshelf} = require('./db/database');
const Response = bookshelf.Model.extend({
  tableName: 'responses'
});
module.exports = Response;
