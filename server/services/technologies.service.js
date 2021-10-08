const db = require('../db/models');

async function findTecnnologiesByUserId(userId) {
  try {
    const stack = await db.Stack.findAll({
      attributes: [
        [db.sequelize.literal('"Technology"."id"'), 'id'],
        [db.sequelize.literal('"Technology"."category"'), 'category'],
        [db.sequelize.literal('"Technology"."title"'), 'title'],
      ],
      raw: true,
      where: {
        userId,
      },
      include: {
        model: db.Technology,
        attributes: [],
      },
    });

    return stack;
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = { findTecnnologiesByUserId };
