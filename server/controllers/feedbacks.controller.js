const db = require('../db/models');

async function getAllFeedbacks(req, res) {
  if (!req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');
  let feedbacks;
  try {
    feedbacks = await db.Feedback.findAll({
      raw: true,
      attributes: [
        'id',
        'title',
        'description',
        'status',
        'userId',
        [db.sequelize.literal('"User"."firstname"'), 'firstname'],
        [db.sequelize.literal('"User"."lastname"'), 'lastname'],
      ],
      include: {
        model: db.User,
        attributes: [],
      },
    });

    return res.json(feedbacks);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Что-то пошло не так');
  }
}

async function createFeedback(req, res) {
  if (!req.session.user) return res.status(401).send('Вы не авторизованы');
  try {
    const feedback = await db.Feedback.create({ ...req.body, userId: req.session.user.id });

    return res.status(201).json(feedback);
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Что-то пошло не так');
  }
}

async function changeFeedbackStatus(req, res) {
  if (!req.session.user || !req.session.user?.isAdmin) return res.status(401).send('У вас недостаточно полномочий');
  const { id, status } = req.body;

  try {
    await db.Feedback.update(
      { status },
      { where: { id } },
    );

    return res.status(200).send('Статус успешно обновлён');
  } catch (e) {
    console.error(e.message);

    return res.status(500).send('Что-то пошло не так');
  }
}

module.exports = { getAllFeedbacks, createFeedback, changeFeedbackStatus };