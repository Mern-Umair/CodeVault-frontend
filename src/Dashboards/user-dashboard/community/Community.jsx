import React from "react";

const Community = () => {
  const posts = [
    {
      id: 1,
      user: "Ali Khan",
      title: "My React Dashboard UI",
      description: "I built a modern dashboard using React + Tailwind.",
      likes: 34,
      comments: 12,
    },
    {
      id: 2,
      user: "Sara Ahmed",
      title: "Navbar Component Pack",
      description: "Reusable navbar components with animations.",
      likes: 56,
      comments: 18,
    },
    {
      id: 3,
      user: "Usman Dev",
      title: "Landing Page Design",
      description: "Clean landing page with dark mode support.",
      likes: 22,
      comments: 7,
    },
  ];

  return (
    <div className="w-full h-full">
      
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Community</h1>
          <p className="text-sm text-gray-400 mt-1">
            Explore what other developers are building.
          </p>
        </div>

        <button className="px-4 py-2 whitespace-nowrap bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
          Create Post
        </button>
      </div>

      {/* Create Post (compact card style) */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6">
        <textarea
          placeholder="Share your project, source code or idea..."
          className="w-full h-20 bg-slate-700 text-gray-100 rounded-lg p-3 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
        />
        <div className="flex justify-end mt-3">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Post
          </button>
        </div>
      </div>

      {/* Community Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-800 rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* User */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                {post.user[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-100">
                  {post.user}
                </p>
                <p className="text-xs text-gray-400">Community</p>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-lg font-semibold text-gray-100 mb-1">
              {post.title}
            </h2>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">
              {post.description}
            </p>

            {/* Footer Actions */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex gap-4">
                <span className="hover:text-indigo-400 cursor-pointer">
                  👍 {post.likes}
                </span>
                <span className="hover:text-indigo-400 cursor-pointer">
                  💬 {post.comments}
                </span>
              </div>
              <button className="text-indigo-400 hover:text-indigo-500 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
