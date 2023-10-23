import React from "react";

const ReviewForm = () => {
  return (
    <div>
      <h2>Leave a Review</h2>
      <form name="review" method="POST" data-netlify="true" action="/success">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" required></textarea>
        </div>
        <div>
          <button type="submit">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
