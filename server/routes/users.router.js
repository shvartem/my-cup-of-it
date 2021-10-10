const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);

router.patch('/:userId', usersController.patchUserProfile);

router.put('/:userId', usersController.editUserProfile);

module.exports = router;
