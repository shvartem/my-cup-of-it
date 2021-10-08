const db = require('../db/models');
const { sequelize } = require('../db/models');

async function getAllUsers(req, res) {
  try {
    const users = await db.User.findAll({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'password',
        'description',
        'isMentor', 'isActive',
        'careerStart',
        'userPhoto',
        [sequelize.literal('"Company"."title"'), 'company'],
      ],
      raw: true,
      include: {
        model: db.Company,
        attributes: [],
      },
    });

    const mappedUsersPromises = users.map(async (user) => {
      const userTechnologies = await db.Stack.findAll({
        attributes: [
          [db.sequelize.literal('"Technology"."id"'), 'id'],
          [db.sequelize.literal('"Technology"."category"'), 'category'],
          [db.sequelize.literal('"Technology"."title"'), 'title'],
        ],
        raw: true,
        where: {
          userId: user.id,
        },
        include: {
          model: db.Technology,
          attributes: [],
        },
      });

      return { ...user, technologies: userTechnologies };
    });
    const mappedUsers = await Promise.all(mappedUsersPromises);

    return res.status(200).json(mappedUsers);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Что-то пошло не так');
  }
}

module.exports = { getAllUsers };
