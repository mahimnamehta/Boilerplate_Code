import React from 'react';
import PostList from '@/features/posts/components/PostList';
import './DashboardPage.scss';

const stats = [
  { icon: '📊', value: '12.5K', label: 'Total Views' },
  { icon: '👥', value: '3,842', label: 'Active Users' },
  { icon: '📝', value: '1,429', label: 'Posts Created' },
  { icon: '⭐', value: '98.2%', label: 'Uptime' },
];

/**
 * DashboardPage – Demo dashboard with stats and PostList (Redux + API)
 */
const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Header */}
        <div className="dashboard-page__header">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's an overview of your application.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card__icon">{stat.icon}</div>
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Posts Section */}
        <div>
          <h2 className="fw-bold mb-3" style={{ color: '#1e1b4b' }}>
            Recent Posts
          </h2>
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
