'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('customer_id');
    // table.string('customer_id').notNullable().defaultTo('');
    table.string('order_number').notNullable().defaultTo('');
    table.string('payment_id').defaultTo('');
    table.string('order_date').defaultTo('');
    table.string('ship_date').notNullable().defaultTo('');
    table.string('freight').notNullable().defaultTo('');
    table.string('sales_tax').notNullable().defaultTo('');
    table.string('trans_status').notNullable().defaultTo('');
    table.boolean('fulfilled').notNullable().defaultTo(false);
    table.boolean('deleted').notNullable().defaultTo(false);
    table.boolean('paid').notNullable().defaultTo(false);
    table.string('payment_date').notNullable().defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
