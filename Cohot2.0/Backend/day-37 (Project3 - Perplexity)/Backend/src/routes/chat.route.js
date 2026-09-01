import { Router } from "express";
import {
  deleteChatController,
  getChatsController,
  getMessagesController,
  sendMessageController,
} from "../controllers/chat.controller.js";
import { identifyUser } from "../middlewares/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/message", identifyUser, sendMessageController);

chatRouter.get("/", identifyUser, getChatsController);

chatRouter.get("/:chatId/messages", identifyUser, getMessagesController);

chatRouter.delete("/delete/:chatId", identifyUser, deleteChatController);

export default chatRouter;

// identifyUser: Use this for authenticating user, so that genuine user can access our particular features
