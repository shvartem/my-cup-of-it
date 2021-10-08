const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

const db = require('../db/models');
const meetsService = require('../services/meets.service');
const companyService = require('../services/company.service');

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
  } = req.body;

  let newUser;
  try {
    const duplicateUser = await db.User.findOne({ where: { email } });

    if (duplicateUser) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
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
    });
    newUser = dataValues;
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }

  const company = await companyService.findCompanyById(newUser.companyId);

  req.session.user = {
    id: newUser.id,
    firstname,
    lastname,
    email,
    isMentor,
    isActive,
    companyId,
  };

  const { user } = req.session;

  delete user.companyId;
  return res.status(201).json({ ...user, meets: [], company });
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
      delete user.password;

      req.session.user = user;

      let userMeets;
      let company;
      try {
        userMeets = await meetsService.findUserMeets(user);
        company = await companyService.findCompanyById(user.companyId);

        delete user.companyId;
        return res.json({ ...user, meets: userMeets, company });
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
  const { user } = req.session;

  let userMeets;
  let company;

  try {
    userMeets = await meetsService.findUserMeets(user);
    company = await companyService.findCompanyById(user.companyId);

    delete user.companyId;
    return res.json({ ...user, meets: userMeets, company });
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
