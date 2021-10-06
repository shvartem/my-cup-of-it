const db = require('../db/models');

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  let user;
  try {
    user = await db.User.create({ name: username, email, password });
  } catch (e) {
    console.log(e);
  }
  req.session.user = {
    id: user.id,
    name: user.name,
  };
  res.json(user);
}

module.exports = { registerUser };
