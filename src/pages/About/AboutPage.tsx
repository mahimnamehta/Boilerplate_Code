import React, { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { CardSkeleton } from '@/components/ui/Skeleton/Skeleton';
import './AboutPage.scss';

const techStack = [
  { icon: '⚛️', name: 'React 19', desc: 'UI Library' },
  { icon: '🔷', name: 'TypeScript', desc: 'Type Safety' },
  { icon: '🗃️', name: 'Redux Toolkit', desc: 'State Management' },
  { icon: '🌐', name: 'Axios', desc: 'HTTP Client' },
  { icon: '🎨', name: 'Bootstrap 5', desc: 'CSS Framework' },
  { icon: '💅', name: 'SCSS', desc: 'Preprocessor' },
  { icon: '🧭', name: 'React Router', desc: 'Routing' },
  { icon: '🐳', name: 'Docker', desc: 'Containerization' },
  { icon: '▲', name: 'Vercel', desc: 'CI/CD & Hosting' },
  { icon: '🧪', name: 'Jest', desc: 'Testing' },
  { icon: '📦', name: 'Vite', desc: 'Build Tool' },
  { icon: '🔀', name: 'React.lazy', desc: 'Code Splitting' },
];

/**
 * AboutPage – Displays tech stack & demonstrates skeleton loading toggle
 */
const AboutPage: React.FC = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">About This Boilerplate</h1>
          <p className="about-hero__subtitle">
            A carefully crafted foundation for building scalable React applications.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0" style={{ color: '#1e1b4b' }}>Tech Stack</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSkeleton(!showSkeleton)}
            >
              {showSkeleton ? 'Show Content' : 'Demo Skeleton'}
            </Button>
          </div>

          {showSkeleton ? (
            <CardSkeleton cards={4} />
          ) : (
            <div className="row g-3">
              {techStack.map((tech, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3">
                  <div className="tech-stack__card">
                    <div className="tech-stack__card-icon">{tech.icon}</div>
                    <div className="tech-stack__card-name">{tech.name}</div>
                    <div className="tech-stack__card-desc">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
