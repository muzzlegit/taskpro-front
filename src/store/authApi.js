import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_URL = 'https://connections-api.herokuapp.com';
const BASE_URL = 'http://localhost:10000';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user'],

  endpoints: builder => ({
    registerUser: builder.mutation({
      query: newUser => ({
        url: '/api/auth/register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['user'],
    }),
    loginUser: builder.mutation({
      query: user => ({
        url: '/api/auth/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['user'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/api/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['user'],
    }),
    refreshUser: builder.query({
      query: () => '/api/auth/current',
      providesTags: ['user'],
    }),
    updateUserTheme: builder.mutation({
      query: newTheme => ({
        url: '/api/users/theme',
        method: 'POST',
        body: newTheme,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserQuery,
  useUpdateUserThemeMutation,
} = authApi;
