'use strict';

const cron = require('node-cron');

const {
  config: { serverPort, providerURL },
} = require('./config');

const { seedingDB } = require('./db');
const logger = require('./logger');
const startServer = require('./server');
const syncService = require('./api/sync.service');

async function bootstrap() {
  try {
    await seedingDB();

    startServer(serverPort);

    cron.schedule('* * * * *', async () => {
      await syncService.start(providerURL);
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

bootstrap();
