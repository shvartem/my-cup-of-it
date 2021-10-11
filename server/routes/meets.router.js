const router = require('express').Router();
const meetsController = require('../controllers/meets.controller');

router.put('/:meetId', meetsController.editMeets);

module.exports = router;
