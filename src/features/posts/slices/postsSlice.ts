import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Post, LoadingState } from '@/types';
import { postsApi } from '../api/postsApi';

// ============================
// State Interface
// ============================
interface PostsState {
  items: Post[];
  selectedPost: Post | null;
  status: LoadingState;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  selectedPost: null,
  status: 'idle',
  error: null,
};

// ============================
// Async Thunks
// ============================
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (limit: number = 10, { rejectWithValue }) => {
    try {
      return await postsApi.getAll(limit);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch posts';
      return rejectWithValue(message);
    }
  }
);

export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async (id: number, { rejectWithValue }) => {
    try {
      return await postsApi.getById(id);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch post';
      return rejectWithValue(message);
    }
  }
);

// ============================
// Slice
// ============================
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearSelectedPost(state) {
      state.selectedPost = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Fetch single post
      .addCase(fetchPostById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedPost, clearError } = postsSlice.actions;
export default postsSlice.reducer;
