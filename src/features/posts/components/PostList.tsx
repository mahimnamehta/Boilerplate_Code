import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { fetchPosts } from '../slices/postsSlice';
import { CardSkeleton } from '@/components/ui/Skeleton/Skeleton';
import { truncateText } from '@/utils/helpers';
import Button from '@/components/ui/Button/Button';

/**
 * PostList – Displays a list of posts from the Redux store
 *
 * Demonstrates:
 * - Redux Toolkit async thunks
 * - Loading skeletons
 * - Error handling
 */
const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts(6));
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <CardSkeleton cards={6} />;
  }

  if (status === 'failed') {
    return (
      <div className="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
        <span>❌ {error || 'Failed to load posts.'}</span>
        <Button variant="outline" size="sm" onClick={() => dispatch(fetchPosts(6))}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {items.map((post) => (
        <div key={post.id} className="col-md-6 col-lg-4">
          <div className="card h-100 card-hover border-0 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold" style={{ color: '#1e1b4b' }}>
                {truncateText(post.title, 50)}
              </h5>
              <p className="card-text text-muted flex-grow-1">
                {truncateText(post.body, 100)}
              </p>
              <Button variant="ghost" size="sm" className="align-self-start mt-2">
                Read More →
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
