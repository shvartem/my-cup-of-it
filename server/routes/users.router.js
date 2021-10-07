const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.get('/users', usersController.getAllUsers);

module.exports = router;
