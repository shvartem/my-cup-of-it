const db = require('../db/models');

async function findUserMeets(user) {
  const configMeets = {
    targetTable: user.isMentor ? 'Interviewer' : 'Mentor',
    targetPerson: user.isMentor ? 'mentorId' : 'interviewerId',
  };
  try {
    const userMeets = await db.Meet.findAll({
      attributes: [
        'id',
        'comment',
        'date',
        'status',
        [db.sequelize.literal(`"${configMeets.targetTable}"."firstname"`), 'firstname'],
        [db.sequelize.literal(`"${configMeets.targetTable}"."lastname"`), 'lastname'],
      ],
      raw: true,
      where: {
        [configMeets.targetPerson]: user.id,
      },
      include: { model: db.User, as: configMeets.targetTable, attributes: [] },
    });
    return userMeets;
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = { findUserMeets };
