const db = require('../db/models');

async function findUserMeets(user) {
  try {
    const userMeets = await db.Meet.findAll({
      attributes: [
        'id',
        'comment',
        'date',
        'status',
        [db.sequelize.literal('"Mentor"."firstname"'), 'firstname'],
        [db.sequelize.literal('"Mentor"."lastname"'), 'lastname'],
      ],
      raw: true,
      where: {
        [`${user.isMentor ? 'mentorId' : 'interviewerId'}`]: user.id,
      },
      include: { model: db.User, as: `${user.isMentor ? 'Interviewer' : 'Mentor'}`, attributes: [] },
    });
    return userMeets;
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = { findUserMeets };
