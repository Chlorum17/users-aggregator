'use strict';

const router = require('express').Router();

const userController = require('../api/user/user.controller');

router.get('/', (req, res) => res.send('OK'));

router.get('/users', userController.getUsers);

module.exports = router;
