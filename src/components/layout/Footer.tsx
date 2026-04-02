import React from 'react';

/**
 * Footer – Site footer
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-auto" style={{ background: '#1e1b4b', color: '#cbd5e1' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {currentYear} <strong className="text-white">Boilerplate</strong>. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <span className="me-3">React</span>
            <span className="me-3">TypeScript</span>
            <span>Redux Toolkit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
