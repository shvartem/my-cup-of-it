/* eslint-disable no-restricted-syntax */
const { customAlphabet } = require('nanoid');
const bcrypt = require('bcrypt');

const nanoid = customAlphabet('1234567890', 6);

const db = require('../db/models');
const userService = require('../services/user.service');
const technologiesService = require('../services/technologies.service');

async function registerUser(req, res) {
  const {
    firstname,
    lastname,
    email,
    password,
    description,
    isMentor,
    isActive,
    careerStart = '',
    companyId = null,
    position,
    technologies,
  } = req.body;

  let user;
  try {
    const duplicateUser = await db.User.findOne({ where: { email } });

    if (duplicateUser) {
      return res.status(400).send('Пользователь с таким email уже существует');
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const { dataValues } = await db.User.create({
      id: nanoid(6),
      firstname,
      lastname,
      email,
      password: hashPassword,
      description,
      isMentor,
      isActive,
      careerStart,
      companyId,
      position,
    });
    user = dataValues;

    await technologiesService.addStackToUser(technologies, user.id);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }
  const userData = await userService.getFullUserData(user);

  req.session.user = {
    id: user.id,
    companyId,
  };

  return res.status(201).json(userData);
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  let user;
  try {
    user = await db.User.findOne({
      raw: true,
      where: { email },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }
  if (user) {
    const isSame = await bcrypt.compare(password, user.password);
    if (isSame) {
      req.session.user = {
        id: user.id,
        companyId: user.companyId,
      };
      try {
        const userData = await userService.getFullUserData(user);
        return res.json(userData);
      } catch (e) {
        console.error(e.message);
        return res.status(500).send('Что-то пошло не так');
      }
    }
  }
  return res.status(404).send('Email или пароль не совпадают');
}

async function getLoggedUser(req, res) {
  if (!req.session.user) {
    return res.json({});
  }

  let user;
  const { id } = req.session.user;

  try {
    user = await db.User.findOne({ where: { id }, raw: true });

    const userData = await userService.getFullUserData(user);
    return res.json(userData);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Что-то пошло не так..');
  }
}

async function logoutUser(req, res) {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Что-то пошло не так');
    }
    return res
      .clearCookie('user_sid')
      .sendStatus(200);
  });
}

module.exports = {
  registerUser, loginUser, getLoggedUser, logoutUser,
};
