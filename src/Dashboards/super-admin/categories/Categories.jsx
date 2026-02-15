import React from "react";
import { Eye, Edit, XCircle } from "lucide-react";

const Categories = () => {
  // Dummy data (baad me API se ayega)
  const categories = [
    { id: 1, name: "UI Kits", createdBy: "Admin", status: "Active" },
    { id: 2, name: "Templates", createdBy: "Manager", status: "Inactive" },
    { id: 3, name: "Components", createdBy: "Admin", status: "Active" },
  ];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
          Categories
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-1">
          Manage platform categories. Add, edit, or delete categories as needed.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              bg-slate-900 border border-slate-800 rounded-2xl
              p-4 sm:p-5
              flex flex-col justify-between
              min-h-[190px]
              hover:shadow-lg transition
            "
          >
            {/* Category Info */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {category.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400">
                Created By: <span className="text-gray-300">{category.createdBy}</span>
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  category.status === "Active"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {category.status}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 transition">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition">
                  <Edit size={16} />
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

export default Categories;