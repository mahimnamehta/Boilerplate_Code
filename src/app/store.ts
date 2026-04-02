import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import postsReducer from '@/features/posts/slices/postsSlice';

// ============================
// Store Configuration
// ============================
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // Add more slices here as your app grows
    // users: usersReducer,
    // auth: authReducer,
  },
  devTools: import.meta.env.DEV,
});

// ============================
// Typed Hooks
// ============================
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** Typed version of useDispatch */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Typed version of useSelector */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
