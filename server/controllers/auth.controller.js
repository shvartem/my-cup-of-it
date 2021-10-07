const { nanoid } = require('nanoid');
const db = require('../db/models');

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
    company = '',
  } = req.body;

  let newUser;
  try {
    const duplicateUser = await db.User.findOne({ where: { email } });

    if (duplicateUser) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    newUser = await db.User.create({
      id: nanoid(10),
      firstname,
      lastname,
      email,
      password,
      description,
      isMentor,
      isActive,
      careerStart,
      company,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }

  req.session.user = {
    id: newUser.id,
    firstname,
    lastname,
    email,
    isMentor,
    isActive,
  };

  return res.status(201).json(newUser);
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  let user;
  try {
    user = await db.User.findOne({ raw: true, where: { email } });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }

  if (user && (password === user.password)) {
    delete user.password;
    console.log(user);

    req.session.user = user;
    return res.json(user);
  }
  return res.status(404).send('Email или пароль не совпадают');
}

async function getLoggedUser(req, res) {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.json({});
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
