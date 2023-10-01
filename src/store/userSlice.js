import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, theme: null, avatarURL: null },
    token: null,
    isLogin: false,
    isRegister: false,
    theme: 'dark',
  },
  reducers: {
    setRegisterChecker(state) {
      state.isRegister = true;
    },
    refreshUser(state, action) {
      const user = action.payload;
      state.user = { ...user };
      state.isLogin = true;
      state.theme = user.theme;
    },
    setUser(state, action) {
      const { user, token } = action.payload;
      state.user = { ...user };
      state.token = token;
      state.isLogin = true;
      state.theme = user.theme;
    },
    removeUser(state) {
      state.user = { name: null, email: null, theme: null, avatarURL: null };
      state.token = null;
      state.isLogin = false;
      state.theme = null;
    },
    setUserTheme(state, action) {
      state.user.theme = action.payload;
      state.theme = action.payload;
    },
  },
});
//persist setup
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'isRegister', 'theme'],
};
const persistedСontactsReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
//Actions
export const {
  setRegisterChecker,
  setUser,
  setUserStatus,
  removeUser,
  refreshUser,
  setUserTheme,
} = userSlice.actions;
//Reducer
export const userReducer = persistedСontactsReducer;
//Selectors
export const getUser = state => state.auth.user;
export const getIsLogin = state => state.auth.isLogin;
export const getToken = state => state.auth.token;
export const getIsRegister = state => state.auth.isRegister;
export const getUserTheme = state => state.auth.theme;
