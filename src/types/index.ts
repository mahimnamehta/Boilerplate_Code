// ============================
// Shared TypeScript Types
// ============================

/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

/** API error shape */
export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

/** Pagination metadata */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/** Paginated response */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

/** Loading states for async operations */
export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

/** Base entity with common fields */
export interface BaseEntity {
  id: number | string;
  createdAt?: string;
  updatedAt?: string;
}

/** Post entity (demo) */
export interface Post extends BaseEntity {
  userId: number;
  title: string;
  body: string;
}

/** User entity (demo) */
export interface User extends BaseEntity {
  name: string;
  email: string;
  username: string;
}
