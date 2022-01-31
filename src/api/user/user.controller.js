'use strict';

const logger = require('../../logger');
const userService = require('./user.service');

const userController = {
  async getUsers(req, res) {
    try {
      const result = await userService.getUsers(req.query);

      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(500).json({ message: `Internal server error: ${err.message}` });
    }
  },
};

module.exports = userController;
