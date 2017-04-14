
exports.up = function(knex, Promise) {
  return knex.schema.createTable('responses', (table) => {
  	table.increments();
  	table.string('height');
  	table.string('handsize');
  	table.string('citizenship');
  	table.specificType('likes', knex.raw('integer[]'))
  	table.string('imgUrl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('responses');
};
