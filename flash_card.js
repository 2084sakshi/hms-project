import React, { useState } from 'react';
import './doctor.css'; // Import the CSS file

const images = ['doctor_image.jpg']; // Wrap image name in quotes

const Flashcard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div
      className="flashcard"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      onClick={handleClick}
    >
      <h2>Welcome to Your Doctor Dashboard</h2>
      <p>
        Thank you for choosing Medconnect360 for your healthcare needs. This dashboard provides you with quick access
        to essential features.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Flashcard;
