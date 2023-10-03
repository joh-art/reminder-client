// BackButton.js
import React from 'react';

const Back = ({ onClick, label }) => {
  const goBack = () => {
    window.history.back(); // Navigate back in the browser history
    if (onClick) {
      onClick(); // Call an optional custom onClick function
    }
  };

  return (
    <button className="back-button" onClick={goBack}>
      {label || 'Back'} {/* Use a custom label or default to 'Back' */}
    </button>
  );
};

export default Back;
