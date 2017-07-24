exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
    .createTable('notes', (table) => {
      table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v1mc()')).primary();
      table.timestamps();
      table.string('title');
      table.string('content');
    })
    .createTable('ivents', (table) => {
      table.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v1mc()')).primary();
      table.timestamps();
      table.string('name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('notes'),
    knex.schema.dropTable('ivents'),
  ]);
};
