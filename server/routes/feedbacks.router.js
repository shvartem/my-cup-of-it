const router = require('express').Router();
const feedbacksController = require('../controllers/feedbacks.controller');

router.route('/')
  .post(feedbacksController.createFeedback)
  .get(feedbacksController.getAllFeedbacks)
  .patch(feedbacksController.changeFeedbackStatus);

module.exports = router;
