'use strict';

// module config

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const KnexSessionStore = require('connect-session-knex')(session);
const {knex} = require('./db/database');

const routes = require('./routes/');

//pug config
app.set('view engine', 'pug');

app.locals.body = {};
app.locals.errors = {};
// ***************** begin middleware ***********************

app.use(express.static('public'));
app.use(routes);

// app.use((req, res) => {
// 	res.render('404');
// })

// ******************* end of middleware ******************

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
