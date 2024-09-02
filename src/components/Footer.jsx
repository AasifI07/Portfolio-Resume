import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Asif Alikhan <FontAwesomeIcon icon={faHeart} className="text-red-500" size="sm" /> FrontEnd Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
