'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table) => {
    table.increments();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category');
};
