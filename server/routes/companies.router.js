const router = require('express').Router();
const companiesController = require('../controllers/companies.controller');

router.get('/companies', companiesController.getAllCompanies);

module.exports = router;
