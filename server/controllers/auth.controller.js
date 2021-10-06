const { nanoid } = require('nanoid');
const db = require('../db/models');

async function registerUser(req, res) {
  const {
    firstname,
    lastname,
    email,
    password,
    description,
    isMentor = false,
    isActive = null,
    careerStart = null,
    company = null,
  } = req.body;

  let user;
  try {
    user = await db.User.create({
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
    id: user.id,
    firstname,
    lastname,
    email,
  };

  return res.status(201).json(user);
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  let user;
  try {
    user = await db.User.findOne({ where: { email } });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Что-то пошло не так');
  }

  if (password === user.password) {
    req.session.user = {
      id: user.id,
      name: user.name,
    };
    return res.json(user);
  }
  return res.sendStatus(404);
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
