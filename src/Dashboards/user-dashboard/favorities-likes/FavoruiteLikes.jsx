import React from "react";

const FavouriteLikes = () => {
  // dummy data (baad me API se ayega)
  const favourites = [
    {
      id: 1,
      title: "Modern Landing Page",
      category: "Web Template",
      likes: 120,
    },
    {
      id: 2,
      title: "Admin Dashboard UI",
      category: "UI Kit",
      likes: 95,
    },
    {
      id: 3,
      title: "React Navbar Components",
      category: "Components",
      likes: 180,
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">
          Favourite Assets
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Assets you have liked or saved for later.
        </p>
      </div>

      {/* If no favourites */}
      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <p className="text-gray-400 mb-2">
            You haven’t liked any assets yet.
          </p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Explore Assets
          </button>
        </div>
      ) : (
        /* Favourite Assets Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="h-36 bg-slate-700 rounded-md mb-4 flex items-center justify-center text-gray-400 text-sm">
                Asset Preview
              </div>

              {/* Info */}
              <h2 className="text-lg font-semibold text-gray-100 mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400 mb-3">
                {item.category}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  ❤️ {item.likes}
                </span>
                <button className="text-indigo-400 hover:text-indigo-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouriteLikes;
