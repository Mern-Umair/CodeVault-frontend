import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

// ============ RTK Query API ============
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Register
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),

    // Login
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    // Get Profile
    getProfile: builder.query({
      query: () => '/auth/profile',
      providesTags: ['User'],
    }),

    // Update Profile
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: '/auth/profile',
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    // Logout
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

// Export hooks
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useLogoutMutation,
} = authApi;

// ============ Auth Slice (State Management) ============
const token = localStorage.getItem('token');
const role = localStorage.getItem('role'); // ✅ ADDED

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: token || null,
    role: role || null, // ✅ ADDED
    isAuthenticated: !!token,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.user.role; // ✅ ADDED
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('role', action.payload.user.role); // ✅ ADDED
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null; // ✅ ADDED
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('role'); // ✅ ADDED
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;