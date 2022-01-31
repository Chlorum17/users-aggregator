'use strict';

require('dotenv').config();

const config = {
  serverPort: process.env.SERVER_PORT || 8080,
  providerURL: process.env.PROVIDER_URL,
};

const pgConfig = {
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

module.exports = { config, pgConfig };
