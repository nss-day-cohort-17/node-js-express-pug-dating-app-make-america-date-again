'use strict';

// module config

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const KnexSessionStore = require('connect-session-knex')(session);
const {knex} = require('./db/database');
//bookshelf initialized in bookshelf.js in root
const bookshelf = require('./bookshelf');

const routes = require('./routes/');

//pug config
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:false}));
app.locals.body = {};
app.locals.errors = {};
app.use(session({
	store: new KnexSessionStore({
		knex,
		tableName: 'sessions'
	}),
	resave: false,
	saveUninitialized: false,
	secret: process.env.SESSION_SECRET || 'datingsupersecretkey'
}));
require('./lib/passport-strats');
app.use(passport.initialize())
app.use(passport.session())

// ***************** begin middleware ***********************

app.use( (req, res, next) => {
	app.locals.email = req.user && req.user.email
	// ^^^setting email as boolean for pug templates
	// console.log('locals email', app.locals.email)
	next()
})

app.use(express.static('public'));
app.use(routes);
app.use((req, res) => {
	res.render('404');
})

// ******************* end of middleware ******************

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
