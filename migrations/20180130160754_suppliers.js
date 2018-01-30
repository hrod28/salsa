'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('suppliers', (table) => {
    table.increments();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('suppliers');
};
