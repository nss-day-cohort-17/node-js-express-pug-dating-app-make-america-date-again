
exports.up = function(knex, Promise) {
  return knex.schema.createTable('responses', (table) => {
  	table.increments();
  	table.integer('userid').references('id').inTable('users')
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
  	table.string('imgUrl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('responses');
};
