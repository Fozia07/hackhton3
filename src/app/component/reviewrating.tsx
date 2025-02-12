"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const ReviewRating = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !rating || !comment) return;

    const newReview = { name, rating, comment };
    setReviews([...reviews, newReview]);

    // Reset form
    setName("");
    setRating(0);
    setComment("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Customer Reviews</h2>

      {/* Existing Reviews */}
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-semibold">{review.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No reviews yet. Be the first to review!</p>
        )}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded-md"
        />

        <div className="flex items-center gap-2">
          <span className="text-gray-700">Rating:</span>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              className={`cursor-pointer ${i < rating ? "text-yellow-500" : "text-gray-400"}`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-2 rounded-md h-20"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewRating;
