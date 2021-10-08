const db = require('../db/models');

async function getAllCompanies(req, res) {
  let companies;
  try {
    companies = await db.Company.findAll({ raw: true });
    return res.json(companies);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }
}

module.exports = { getAllCompanies };
