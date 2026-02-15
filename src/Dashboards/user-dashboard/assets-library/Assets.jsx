import React from "react";

const Assets = () => {
  const assets = [
    { id: 1, title: "Landing Page Template", category: "Web", likes: 120 },
    { id: 2, title: "Dashboard UI Kit", category: "UI Components", likes: 95 },
    { id: 3, title: "E-commerce Template", category: "Web", likes: 80 },
    { id: 4, title: "React Button Pack", category: "Components", likes: 150 },
  ];

  return (
    <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-950">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 sm:gap-0">
        <h1 className="text-2xl font-semibold text-gray-100">Assets</h1>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition w-full sm:w-auto">
          Upload Asset
        </button>
      </div>

      {/* Search / Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search assets..."
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-gray-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <select className="px-4 py-2 rounded-lg bg-slate-800 text-gray-100 border border-slate-700 w-full sm:w-auto">
          <option>All Categories</option>
          <option>Web</option>
          <option>UI Components</option>
          <option>React</option>
        </select>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-slate-800 rounded-lg p-4 hover:shadow-lg transition cursor-pointer flex flex-col"
          >
            <div className="h-36 sm:h-40 bg-slate-700 rounded-md mb-4 flex items-center justify-center text-gray-400 text-sm sm:text-base">
              Thumbnail
            </div>
            <h2 className="text-lg font-semibold text-gray-100 mb-1 truncate">
              {asset.title}
            </h2>
            <p className="text-sm text-gray-400 mb-2">{asset.category}</p>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <span>👍 {asset.likes}</span>
              <button className="text-indigo-400 hover:text-indigo-500 text-sm">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Assets;
