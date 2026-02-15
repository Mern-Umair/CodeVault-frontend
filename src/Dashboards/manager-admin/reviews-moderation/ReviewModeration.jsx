import React from "react";
import { CheckCircle, XCircle, Eye } from "lucide-react";

const CommunityModeration = () => {
  const posts = [
    { id: 1, title: "Best React Folder Structure?", author: "Ali Khan", type: "Discussion", status: "Pending" },
    { id: 2, title: "Tailwind vs Bootstrap", author: "Sara Ahmed", type: "Question", status: "Pending" },
    { id: 3, title: "Showcase: My MERN Dashboard", author: "Usman Dev", type: "Showcase", status: "Pending" },
  ];

  return (
    <div className="w-full h-full p-4 md:p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100">
          Community Moderation
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          Review and moderate community posts and discussions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-48 hover:shadow-lg transition-shadow"
          >
            {/* Post Info */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-100 truncate">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm truncate">Author: {post.author}</p>
              <p className="text-gray-400 text-sm truncate">Type: {post.type}</p>
            </div>

            {/* Status & Actions */}
            <div className="mt-4 flex justify-between items-center">
              {/* Status aligned left */}
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                {post.status}
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

export default CommunityModeration;
