// Preloader.jsx
import React from 'react';
import '../App.css'; // Add your styling here

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
