const db = require('../db/models');

async function findSocialByUserId(userId) {
  let socials;

  try {
    socials = await db.Social.findAll({ where: { userId }, raw: true });
  } catch (e) {
    console.log(e);
  }
  return socials;
}

module.exports = { findSocialByUserId };
