import React, { useState, useEffect } from 'react';
import '../css/links.css';
import { Collapse } from 'react-collapse';

const LinksPage = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLinksOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/maxbielstein/" },
    { name: "GitHub", url: "https://github.com/MaxBielstein" },
  ];

  const handleLinkClick = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="container">
      <h1>Useful Links</h1>
      <div>
        <button className="button" onClick={() => setIsLinksOpen(!isLinksOpen)}>Explore Links</button>
        <Collapse isOpened={isLinksOpen}>
          <div className="linksList">
            {links.map(link => (
              <div key={link.name} className="linkItem" onClick={() => handleLinkClick(link.url)}>
                {link.name}
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default LinksPage;
