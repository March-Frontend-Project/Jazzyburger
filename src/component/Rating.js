import React, { useState } from 'react';
// import './StarRating.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating && "filled"}`}
          onClick={() => handleStarClick(index + 1)}
        >&#x2605;</span>
      ))}
       <p>{rating} ratings</p>
    </div>
  );
};

export default StarRating;
