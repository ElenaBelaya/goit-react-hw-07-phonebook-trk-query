import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import filter from 'redux/filter';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
