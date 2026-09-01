import { useDispatch } from "react-redux";
import { intializeSocketConnection } from "../services/chat.service.js";
import {
  setChats,
  setIsLoading,
  setCurrentChatId,
  setError,
  setCreateNewChat,
  setAddNewMessage,
  setAddMessages,
} from "../chat.slice.js";
import {
  sendMessage,
  getChats,
  getMessages,
  deleteChat,
} from "../services/chat.api.js";

export const useChat = () => {
  const dispatch = useDispatch();

  const handleSendMessage = async ({ message, chatId }) => {
    try {
      dispatch(setIsLoading(true));
      const data = await sendMessage({ message, chatId });
      const { chat, aiMessage } = data;
      dispatch(setCreateNewChat({ chatId: chat._id, title: chat.title }));
      dispatch(
        setAddNewMessage({ chatId: chat._id, content: message, role: "user" }),
      );
      dispatch(
        setAddNewMessage({
          chatId: chat._id,
          content: aiMessage.content,
          role: aiMessage.role,
        }),
      );
      dispatch(setCurrentChatId(chat._id));
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Request failed"));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handleGetChats = async () => {
    try {
      dispatch(setIsLoading(true));
      const data = await getChats();
      const { chats } = data;
      dispatch(
        setChats(
          chats.reduce((acc, chat) => {
            acc[chat._id] = {
              id: chat._id,
              title: chat.title,
              messages: [],
              lastUpdated: chat.updatedAt,
            };
            return acc;
          }, {}),
        ),
      );
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Request failed"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChat = async (chatId) => {
    const data = await getMessages(chatId);
    const { messages } = data;

    const formattedMessages = messages.map((msg) => ({
      content: msg.content,
      role: msg.role,
    }));

    dispatch(
      setAddMessages({
        chatId,
        messages: formattedMessages,
      }),
    );

    dispatch(setCurrentChatId(chatId));
  };

  return {
    intializeSocketConnection,
    handleSendMessage,
    handleGetChats,
    handleOpenChat
  };
};
