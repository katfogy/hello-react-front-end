import { configureStore } from '@reduxjs/toolkit';
import messagesreducer from './greeting/greetingsSlice';

const store = configureStore({
  reducer: {
    messageList: messagesreducer,

  },
});

export default store;
