import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

function MainHeader() {
  return (
    <main className="main-header">
          <div className="main-box">
              <div>
                  <h2>
                      Max Bielstein
                  </h2>
                  <div className="flex-div">
                      <div className="flex-item">
                          <Link to="/about">Home Page</Link>
                      </div>
                      <div className="flex-item">
                          <Link to="/contact">Contact Page</Link>
                      </div>
                      <div className="flex-item">
                          <Link to="/resume">Resume Page</Link>
                      </div>
                      <div className="flex-item">
                          <Link to="/projects">Projects Page</Link>
                      </div>
                      <div className="flex-item">
                          <Link to="/skills">Skills Page</Link>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default MainHeader;
