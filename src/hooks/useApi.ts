import { useState, useEffect, useCallback } from 'react';
import type { AxiosRequestConfig } from 'axios';
import apiClient from '@/services/apiClient';

/**
 * useApi – Reusable API Hook
 *
 * A generic hook for making API calls with loading, error, and data states.
 * Supports auto-fetching on mount or manual triggering.
 *
 * @example
 * // Auto-fetch on mount
 * const { data, loading, error } = useApi<Post[]>('/posts');
 *
 * // Manual fetch
 * const { data, loading, error, execute } = useApi<Post[]>('/posts', { manual: true });
 * execute(); // Call when needed
 */

interface UseApiOptions extends AxiosRequestConfig {
  manual?: boolean;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (overrideConfig?: AxiosRequestConfig) => Promise<T | undefined>;
  reset: () => void;
}

function useApi<T = unknown>(
  url: string,
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const { manual = false, ...axiosConfig } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!manual);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (overrideConfig?: AxiosRequestConfig): Promise<T | undefined> => {
      try {
        setLoading(true);
        setError(null);

        const response = await apiClient.request<T>({
          url,
          method: 'GET',
          ...axiosConfig,
          ...overrideConfig,
        });

        setData(response.data);
        return response.data;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(message);
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    [url] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (!manual) {
      execute();
    }
  }, [manual, execute]);

  return { data, loading, error, execute, reset };
}

export default useApi;
