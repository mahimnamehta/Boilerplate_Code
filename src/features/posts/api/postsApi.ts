import apiClient from '@/services/apiClient';
import type { Post } from '@/types';

/**
 * Posts API service
 */
export const postsApi = {
  /** Fetch all posts */
  getAll: async (limit: number = 10): Promise<Post[]> => {
    const response = await apiClient.get<Post[]>('/posts', {
      params: { _limit: limit },
    });
    return response.data;
  },

  /** Fetch a single post by ID */
  getById: async (id: number): Promise<Post> => {
    const response = await apiClient.get<Post>(`/posts/${id}`);
    return response.data;
  },

  /** Create a new post */
  create: async (post: Omit<Post, 'id'>): Promise<Post> => {
    const response = await apiClient.post<Post>('/posts', post);
    return response.data;
  },

  /** Update a post */
  update: async (id: number, post: Partial<Post>): Promise<Post> => {
    const response = await apiClient.put<Post>(`/posts/${id}`, post);
    return response.data;
  },

  /** Delete a post */
  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/posts/${id}`);
  },
};
