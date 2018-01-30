'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'hotsalsa'
    },
},

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
