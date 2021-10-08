const router = require('express').Router();
const tachnologiesController = require('../controllers/technologies.controller');

router.get('/', tachnologiesController.getAllTechnologies);

module.exports = router;
