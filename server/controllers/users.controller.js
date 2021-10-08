const db = require('../db/models');
const { sequelize } = require('../db/models');
const technologiesService = require('../services/technologies.service');

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
      const userTechnologies = await technologiesService.findTecnnologiesByUserId(user.id);

      return { ...user, technologies: userTechnologies };
    });
    const mappedUsers = await Promise.all(mappedUsersPromises);

    return res.status(200).json(mappedUsers);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Что-то пошло не так');
  }
}

async function editUser(req, res) {
  const { userId } = req.params;
  try {
    await db.User.update(req.body, { where: { id: userId } });
    return res.status(200).json({ ...req.body });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }
}

module.exports = { getAllUsers, editUser };
