'use strict';

const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
const { pgConfig } = require('../config');
const logger = require('../logger');

const pg = new Pool(pgConfig);

async function seedingDB() {
  const client = new Client(pgConfig);

  const seedingQuery = fs.readFileSync(path.resolve(__dirname, 'seed.sql'), { encoding: 'utf-8' });

  await client.connect();
  await client.query(seedingQuery);
  await client.end();

  logger.info('Database seeding completed');
}

module.exports = { pg, seedingDB };
