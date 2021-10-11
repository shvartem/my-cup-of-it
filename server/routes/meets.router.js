const router = require('express').Router();
const { nanoid } = require('nanoid');

const meetsController = require('../controllers/meets.controller');
const { Meet, User, sequelize } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const newMeeting = await Meet.create({ id: nanoid(6), ...req.body.payload });
    const { mentorId } = newMeeting;
    const newUserMeeting = await Meet.findOne({
      where: { id: newMeeting.id },
      attributes: [
        'id',
        'comment',
        'date',
        'status',
        [sequelize.literal('"Mentor"."firstname"'), 'firstname'],
        [sequelize.literal('"Mentor"."lastname"'), 'lastname'],
      ],
      raw: true,
      include: {
        model: User,
        as: 'Mentor',
        where: { id: mentorId },
        attributes: [],
      },
    });
    return res.json(newUserMeeting);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Что-то пошло не так');
  }
});

router.put('/:meetId', meetsController.editMeets);

module.exports = router;
