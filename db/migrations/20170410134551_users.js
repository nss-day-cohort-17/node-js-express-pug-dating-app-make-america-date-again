
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
  	table.increments();
  	table.string('name').notNullable().unique();
  	table.string('email').notNullable().unique();
  	table.string('password');
  	table.string('height');
  	table.integer('handsize');
  	table.boolean('citizenship');
  	table.specificType('likes', knex.raw('integer[]'))
  	table.integer('quest1');
  	table.integer('quest2');
  	table.integer('quest3');
  	table.integer('quest4');
  	table.integer('quest5');
  	table.integer('score');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
