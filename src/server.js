'use strict';

const express = require('express');

const server = express();
const router = require('./router');
const logger = require('./logger');

function startServer(serverPort) {
  server.use('/api', router);
  server.listen(serverPort, () => logger.info(`Server started at port: ${serverPort}`));
}

module.exports = startServer;
