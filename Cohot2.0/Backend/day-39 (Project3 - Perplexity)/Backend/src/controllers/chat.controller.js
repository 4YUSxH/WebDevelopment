import { generateResponse, generateChatTitle } from "../services/ai.service.js";
import chatModel from "../models/chat.mode.js";
import messageModel from "../models/message.model.js";

export const sendMessageController = async (req, res) => {
  const { message, chat: chatId } = req.body;

  let title = null,
    chat = null;

  //   Not a new chat
  if (!chatId) {
    title = await generateChatTitle({ firstMessage: message });
    chat = await chatModel.create({
      user: req.user.id,
      title,
    });
  }

  //   Saving user current message with old message
  const userMessage = await messageModel.create({
    chat: chatId || chat._id,
    content: message, // Saving user's message
    role: "user",
  });

  //   Fetching all the message so that we can feed this to AI and AI can also access old questions
  const messages = await messageModel.find({ chat: chatId || chat._id });

  //   Generating response using AI service
  const result = await generateResponse(messages);

  const aiMessage = await messageModel.create({
    chat: chatId || chat._id,
    content: result, // Saving ai message
    role: "ai",
  });

  return res.status(201).json({ title, chat, aiMessage });
};

export const getChatsController = async (req, res) => {
  const userId = req.user.id;

  const chats = await chatModel.find({ user: userId });

  return res.status(200).json({
    message: "Chats fetched successfully",
    chats,
  });
};

export const getMessagesController = async (req, res) => {
  const { chatId } = req.params;

  const chat = await chatModel.findOne({
    _id: chatId,
    user: req.user.id,
  });

  if (!chat) {
    return res.status(404).json({
      message: "Chat not found",
    });
  }

  const messages = await messageModel.find({
    chat: chatId,
  });

  return res.status(200).json({
    message: "Messages fetched successfully",
    messages,
  });
};

export const deleteChatController = async (req, res) => {
  const { chatId } = req.params;

  const chat = await chatModel.findOneAndDelete({
    _id: chatId,
    user: req.user.id,
  });

  await messageModel.deleteMany({
    chat: chatId,
  });

  if (!chat) {
    return res.status(404).json({
      message: "Chat not found",
    });
  }

  return res.status(200).json({
    message: "Chat deleted successfully",
  });
};
