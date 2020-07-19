import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="landr-footer">
      <div className="landr-container">{`Landr, ${new Date().getFullYear()} All rights reserved.`}</div>
    </footer>
  );
};

export default Footer;
