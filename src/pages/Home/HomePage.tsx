import React from 'react';
import Button from '@/components/ui/Button/Button';
import './HomePage.scss';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with Vite for instant hot module replacement and blazing-fast builds.',
  },
  {
    icon: '🏗️',
    title: 'Clean Architecture',
    description: 'Feature-based folder structure designed for large-scale, maintainable applications.',
  },
  {
    icon: '🎨',
    title: 'Beautiful UI',
    description: 'Bootstrap 5 with custom SCSS theming, loading skeletons, and smooth animations.',
  },
  {
    icon: '🔒',
    title: 'Type Safe',
    description: 'Full TypeScript support with strict mode enabled for reliable, bug-free code.',
  },
  {
    icon: '📦',
    title: 'State Management',
    description: 'Redux Toolkit with typed hooks, async thunks, and organized feature slices.',
  },
  {
    icon: '🐳',
    title: 'Docker Ready',
    description: 'Multi-stage Docker build with Nginx for production-ready containerization.',
  },
];

/**
 * HomePage – Landing page demonstrating Button component and feature cards
 */
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="hero__title">
                Build Scalable Apps<br />
                <span style={{ opacity: 0.85 }}>with Confidence</span>
              </h1>
              <p className="hero__subtitle">
                A production-ready React + TypeScript boilerplate with clean architecture,
                Redux Toolkit, Axios, Bootstrap, Docker, and CI/CD — everything you need to
                ship faster.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: '#fff' }}>
                  Get Started
                </Button>
                <Button variant="ghost" size="lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  View on GitHub →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: '#1e1b4b' }}>
              Everything You Need
            </h2>
            <p className="text-muted mt-2" style={{ maxWidth: '500px', margin: '0 auto' }}>
              Start building with best practices baked in from day one.
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="features__card">
                  <div className="features__card-icon">{feature.icon}</div>
                  <h3 className="features__card-title">{feature.title}</h3>
                  <p className="features__card-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
