const express = require('express');

const messageController = require('../controllers/messageController');

const router = express.Router();

router
  .route('/')
  .get(messageController.getAllMessages)
  .post(messageController.createMessage);

router
  .route('/:id')
  .get(messageController.getMessage)
  .patch(messageController.updateMessage);

module.exports = router;
