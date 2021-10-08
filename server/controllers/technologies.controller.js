const db = require('../db/models');

async function getAllTechnologies(req, res) {
  try {
    console.log('>>>>>>>>>>>>>>>>>>');
    const technologies = await db.Technology.findAll({ raw: true });
    console.log({ technologies });

    return res.status(200).json(technologies);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Что-то пошло не так...');
  }
}

module.exports = { getAllTechnologies };
