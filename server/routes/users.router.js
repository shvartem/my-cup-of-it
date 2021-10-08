const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);

module.exports = router;
