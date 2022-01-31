'use strict';

const logger = require('../logger');
const providerService = require('./provider.service');
const userService = require('./user/user.service');

const syncService = {
  async start(providerURL) {
    try {
      const users = await providerService.getUsers(providerURL);
      await userService.saveUsers(users);
      logger.info('Synchronization completed');
    } catch (err) {
      logger.error(err);
    }
  },
};

module.exports = syncService;
