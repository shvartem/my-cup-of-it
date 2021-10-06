const router = require('express').Router();
const db = require('../db/models');
const authConroller = require('../controllers/auth.controller');

router.post('/register', authConroller.registerUser);

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await db.User.findOne({ where: { email } });
  } catch (e) {
    console.log(e);
  }

  if (password === user.password) {
    req.session.user = {
      id: user.id,
      name: user.name,
    };
    return res.json(user);
  }
  return res.sendStatus(400);
});

router.get('/me', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.json({});
});

router.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    res
      .clearCookie('user_sid')
      .sendStatus(200);
  });
});

module.exports = router;
