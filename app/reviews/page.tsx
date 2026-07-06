"use client";

import { useState } from "react";

export default function Reviews() {

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "Example Customer",
      stars: 5,
      text: "Great service and amazing vendors!"
    }
  ]);


  function submitReview() {

    if (review.trim() === "" || rating === 0) {
      return;
    }

    setReviews([
      ...reviews,
      {
        name: "Customer",
        stars: rating,
        text: review
      }
    ]);

    setReview("");
    setRating(0);
  }


  return (
    <main className="reviews-page">
       <a href="/" className="back-arrow">
  ← Home
</a> 

      <h1>
        Customer Reviews
      </h1>

      <p>
        Leave your feedback about SHOP-PC
      </p>


      <div className="review-box">

        <h2>
          Your Rating
        </h2>


        <div className="stars">

          {[1,2,3,4,5].map((star) => (

            <span
              key={star}
              onClick={() => setRating(star)}
              className={star <= rating ? "selected-star" : ""}
            >
              ★
            </span>

          ))}

        </div>


        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />


        <button onClick={submitReview}>
          Submit Review
        </button>


      </div>



      <div className="all-reviews">

        {reviews.map((item, index) => (

          <div className="customer-review" key={index}>

            <h2>
              {item.name}
            </h2>


            <p className="review-stars">

              {"★".repeat(item.stars)}

            </p>


            <p>
              {item.text}
            </p>


          </div>

        ))}

      </div>


    </main>
  );
}