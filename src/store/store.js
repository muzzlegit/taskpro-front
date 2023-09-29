import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
//slices
// import { contactsApi } from './contactsSlice';
// import { filterReducer } from 'redux/filterSlice.js';
import { authApi } from './authApi';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    // filter: filterReducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
    auth: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    // contactsApi.middleware,
  ],
});
export const persistor = persistStore(store);
