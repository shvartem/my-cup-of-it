const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);

router.put('/users/:userId', usersController.editUser);

module.exports = router;
