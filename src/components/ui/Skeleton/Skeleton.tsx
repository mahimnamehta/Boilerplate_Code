import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Skeleton.scss';

interface CardSkeletonProps {
  cards?: number;
}

/**
 * CardSkeleton – Loading placeholder for card-based layouts
 */
export const CardSkeleton: React.FC<CardSkeletonProps> = ({ cards = 3 }) => {
  return (
    <div className="skeleton-wrapper">
      {Array.from({ length: cards }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <Skeleton height={20} width="60%" style={{ marginBottom: '0.75rem' }} />
          <Skeleton count={3} style={{ marginBottom: '0.5rem' }} />
          <Skeleton height={36} width={120} style={{ marginTop: '0.5rem' }} />
        </div>
      ))}
    </div>
  );
};

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

/**
 * TableSkeleton – Loading placeholder for table layouts
 */
export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rows = 5,
  columns = 4,
}) => {
  return (
    <div className="skeleton-wrapper">
      <div className="d-flex gap-3 mb-3">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} height={20} width={`${100 / columns}%`} />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div className="d-flex gap-3 mb-2" key={i}>
          {Array.from({ length: columns }).map((_, j) => (
            <Skeleton key={j} height={16} width={`${100 / columns}%`} />
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * PageSkeleton – Full-page loading placeholder
 */
export const PageSkeleton: React.FC = () => {
  return (
    <div className="page-loading">
      <div style={{ width: '100%', maxWidth: '800px', padding: '2rem' }}>
        <Skeleton height={40} width="50%" style={{ marginBottom: '1.5rem' }} />
        <Skeleton count={4} style={{ marginBottom: '0.75rem' }} />
        <div className="d-flex gap-3 mt-4">
          <Skeleton height={140} width="33%" borderRadius={12} />
          <Skeleton height={140} width="33%" borderRadius={12} />
          <Skeleton height={140} width="33%" borderRadius={12} />
        </div>
      </div>
    </div>
  );
};

export default { CardSkeleton, TableSkeleton, PageSkeleton };
