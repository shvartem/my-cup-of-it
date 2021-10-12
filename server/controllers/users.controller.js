const db = require('../db/models');
const { sequelize } = require('../db/models');
const technologiesService = require('../services/technologies.service');
const userService = require('../services/user.service');
const socialsService = require('../services/socials.service');

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
      const userSocials = await socialsService.findSocialByUserId(user.id);
      return { ...user, technologies: userTechnologies, socials: userSocials };
    });
    const mappedUsers = await Promise.all(mappedUsersPromises);

    return res.status(200).json(mappedUsers);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернену');
  }
}

async function patchUserProfile(req, res) {
  try {
    let result;
    if (Object.prototype.hasOwnProperty.call(req.body, 'isMentor')) {
      result = await db.User.update({
        isMentor: req.body.isMentor,
      }, {
        where: { id: req.params.userId },
      });
    }
    if (Object.prototype.hasOwnProperty.call(req.body, 'isActive')) {
      result = await db.User.update({
        isActive: req.body.isActive,
      }, {
        where: { id: req.params.userId },
      });
    }
    if (result[0]) return res.sendStatus(201);
    throw new Error();
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернену');
  }
}

async function editUserProfile(req, res) {
  const { userId } = req.params;
  const {
    firstname, lastname, description, companyId, careerStart, technologies, position,
  } = req.body;

  try {
    let result;
    if (req.file) {
      const userPhoto = req.body.file?.path.replace(/^public\//, '');
      [result] = await db.User.update({
        firstname,
        lastname,
        userPhoto,
        description,
        companyId,
        careerStart,
      }, { where: { id: userId } });
    } else {
      [result] = await db.User.update({
        firstname,
        lastname,
        description,
        companyId,
        careerStart,
      }, { where: { id: userId } });
    }

    if (!result) throw new Error();
    const user = await db.User.findOne({ where: { id: userId }, raw: true });

    req.session.user = {
      id: userId,
      companyId: user.companyId,
    };

    try {
      await technologiesService.clearUserStack(userId);
      await technologiesService.addStackToUser(technologies, userId);
    } catch (e) {
      console.log(e);
    }
    const userData = await userService.getFullUserData(user);
    return res.json(userData);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так, проверьте подключение к интернену');
  }
}

module.exports = { getAllUsers, editUserProfile, patchUserProfile };
