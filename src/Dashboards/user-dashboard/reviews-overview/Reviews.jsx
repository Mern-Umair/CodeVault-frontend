import React from "react";

const Reviews = () => {
  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      user: "Ali Khan",
      asset: "Landing Page Template",
      rating: 5,
      comment: "Amazing template, very clean and responsive!",
      date: "2026-01-20",
    },
    {
      id: 2,
      user: "Sara Ahmed",
      asset: "React Dashboard UI",
      rating: 4,
      comment: "Good design, easy to customize.",
      date: "2026-01-22",
    },
    {
      id: 3,
      user: "Usman Dev",
      asset: "Navbar Component Pack",
      rating: 4,
      comment: "Helpful components, saved me a lot of time.",
      date: "2026-01-25",
    },
  ];

  return (
    <div className="w-full h-full">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Reviews</h1>
        <p className="text-sm text-gray-400 mt-1">
          See what users are saying about your assets.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-slate-800 rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                {review.user[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-100">{review.user}</p>
                <p className="text-xs text-gray-400">{review.asset}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-600"}>
                  ★
                </span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-sm text-gray-300 mb-2 line-clamp-3">
              {review.comment}
            </p>

            {/* Date */}
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
