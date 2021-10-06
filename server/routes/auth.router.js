const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);

router.get('/me', authController.getLoggedUser);

router.get('/logout', authController.logoutUser);

module.exports = router;
