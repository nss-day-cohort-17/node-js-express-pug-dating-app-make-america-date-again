'use strict';

const Response = require('../models/responses');
const { knex } = require('../db/database');

module.exports.show = (req, res) => {
	res.render('responses', {page: 'Responses'});
}

module.exports.create = ({body}, res, err) => {
	Response.forge(body)
	.save()
	.then((responsesObj) => {
		res.redirect('/')
	})
	.catch(err)
}
