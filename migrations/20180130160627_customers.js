'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('address1').notNullable().defaultTo('');
    table.string('address2').defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('state').notNullable().defaultTo('');
    // table.integer('zip').notNullable().defaultTo('');
    // table.integer('phone').defaultTo('');
    // table.string('email').defaultTo('');
    table.string('bill_address').defaultTo('');
    table.string('bill_city').defaultTo('');
    table.string('bill_zip').defaultTo('');
    table.string('ship_address1').defaultTo('');
    table.string('ship_address2').defaultTo('');
    table.string('ship_city').defaultTo('');
    table.string('ship_zip').defaultTo('');
    table.string('ship_spec_instructions').defaultTo('');
    table.boolean('is_admin').defaultTo(false);
    table.string('password').notNullable().defaultTo('');
    table.string('username').notNullable().defaultTo('');
    // table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
