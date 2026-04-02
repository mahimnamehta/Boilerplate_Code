import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageSkeleton } from '@/components/ui/Skeleton/Skeleton';

// ============================
// Lazy-loaded Pages
// ============================
const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const AboutPage = lazy(() => import('@/pages/About/AboutPage'));
const DashboardPage = lazy(() => import('@/pages/Dashboard/DashboardPage'));

/**
 * AppRoutes – Centralized route definitions with lazy loading
 *
 * Each page is code-split and loaded on demand.
 * PageSkeleton is shown as fallback while loading.
 */
const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="error-boundary">
              <div className="error-boundary__icon">🔍</div>
              <h2 className="error-boundary__title">Page Not Found</h2>
              <p className="error-boundary__message">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
