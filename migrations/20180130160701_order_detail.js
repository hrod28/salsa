'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orderdetail', (table) => {
    table.increments();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orderdetail');
};
