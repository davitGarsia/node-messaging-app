const Message = require('../models/messageModel');

exports.getAllMessages = async (req, res) => {
  const messages = await Message.find();

  res.status(200).json({
    status: 'success',
    results: messages.length,
    data: {
      messages,
    },
  });
};

exports.getMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    return new Error('No message found with that ID', 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      message,
    },
  });
};

exports.createMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      message: newMessage,
    },
  });
};

exports.updateMessage = async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!message) {
    return new Error('No message found with that ID', 404);
  }
  res.status(200).json({
    status: 'success',
    data: {
      message,
    },
  });
};
