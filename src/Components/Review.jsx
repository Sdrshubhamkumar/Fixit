import { useState } from "react";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;
    setReviews([{ name, comment }, ...reviews]);
    setName("");
    setComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Customer Reviews</h1>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="bg-gray-300 p-6 rounded shadow mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            className="w-full px-4 py-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Comment</label>
          <textarea
            className="w-full px-4 py-2 border rounded"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No reviews yet. Be the first!</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded p-4 shadow-sm"
            >
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-700 mt-1">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewPage;
