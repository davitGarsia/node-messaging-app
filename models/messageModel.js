const mongoose = require('mongoose');
const validator = require('validator');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'A message must have a text'],
  },
  user: {
    type: String,
    required: [true, 'A message must have a user'],
  },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
