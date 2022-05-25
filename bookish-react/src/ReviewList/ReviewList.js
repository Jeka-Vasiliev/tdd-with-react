import React from "react";

export const ReviewList = ({ reviews }) => {
  return (
    <div data-testid="reviews-container">
      {reviews.map((review) => (
        <div key={review.name + review.date} data-testid="review">
          {review.name}
        </div>
      ))}
    </div>
  );
};
