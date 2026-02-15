import React from "react";
import { CheckCircle, XCircle, Eye } from "lucide-react";

const AssetModeration = () => {
  const assets = [
    { id: 1, title: "Modern Dashboard UI", author: "Ali Khan", category: "Dashboard", status: "Pending" },
    { id: 2, title: "Animated Navbar", author: "Sara Ahmed", category: "Components", status: "Pending" },
    { id: 3, title: "Landing Page Template", author: "Usman Dev", category: "Templates", status: "Pending" },
  ];

  return (
    <div className="w-full h-full p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100">
          Assets Moderation
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          Review, approve or reject submitted assets.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-48 hover:shadow-lg transition-shadow"
          >
            {/* Asset Info */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-100 truncate">
                {asset.title}
              </h3>
              <p className="text-gray-400 text-sm truncate">Author: {asset.author}</p>
              <p className="text-gray-400 text-sm truncate">Category: {asset.category}</p>
            </div>

            {/* Status & Actions */}
            <div className="mt-4 flex justify-between items-center">
              {/* Status aligned left */}
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                {asset.status}
              </span>

              {/* Actions aligned right */}
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 transition">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 transition">
                  <CheckCircle size={16} />
                </button>
                <button className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition">
                  <XCircle size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetModeration;
