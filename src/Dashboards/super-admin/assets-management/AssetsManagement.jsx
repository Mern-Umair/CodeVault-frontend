import React from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";

const AssetsManagement = () => {
  // Dummy data (baad me API se ayega)
  const assets = [
    { id: 1, title: "Modern Dashboard UI Kit", owner: "Ali Khan", category: "UI Kit", status: "Pending" },
    { id: 2, title: "React Landing Page", owner: "Sara Ahmed", category: "Templates", status: "Approved" },
    { id: 3, title: "Admin Panel Design", owner: "Usman Dev", category: "Dashboard", status: "Rejected" },
  ];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
          Assets Management
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-1">
          View, approve or reject platform assets submitted by users.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="
              bg-slate-900 border border-slate-800 rounded-2xl
              p-4 sm:p-5
              flex flex-col justify-between
              min-h-[190px]
              hover:shadow-lg transition
            "
          >
            {/* Asset Info */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {asset.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 truncate">
                Owner: <span className="text-gray-300">{asset.owner}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                Category: <span className="text-gray-300">{asset.category}</span>
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  asset.status === "Approved"
                    ? "bg-green-500/10 text-green-400"
                    : asset.status === "Rejected"
                    ? "bg-red-500/10 text-red-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {asset.status}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-2">
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

export default AssetsManagement;