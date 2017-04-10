'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessions = require('express-session');
const passport = require('passport');
const knexSessionStore = require('connect-session-knex')(session);
const {knex} = require('../db/database');


//pug config
app.set('view engine', 'pug');


//middlewares




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port ${port}");
});
