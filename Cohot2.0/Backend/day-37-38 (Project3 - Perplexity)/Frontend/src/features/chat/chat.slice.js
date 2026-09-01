import { createSlice, current } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: {},
    currentChatId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCreateNewChat: (state, action) => {
      const { chatId, title } = action.payload;
      state.chats[chatId] = {
        // creating a new property inside state.chats
        id: chatId.title,
        messages: [],
        lastUpdated: new Date().toISOString(),
      };
    },
    setAddNewMessage: (state, action) => {
      const { chatId, content, role } = action.payload;

      state.chats[chatId].messages.push({ content, role });
    },
    setAddMessages: (state, action) => {
      const { chatId, messages } = action.payload;
      state.chats[chatId].messages.push(...messages);
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setChats,
  setCurrentChatId,
  setIsLoading,
  setError,
  setCreateNewChat,
  setAddNewMessage,
  setAddMessages
} = chatSlice.actions;

export default chatSlice.reducer;
