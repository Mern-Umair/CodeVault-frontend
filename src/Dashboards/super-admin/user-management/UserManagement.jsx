import React from "react";
import { Eye, Edit, XCircle } from "lucide-react";

const UserManagement = () => {
  const users = [
    { id: 1, name: "Ali Khan", email: "ali@example.com", role: "User", status: "Active" },
    { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Admin", status: "Inactive" },
    { id: 3, name: "Usman Dev", email: "usman@example.com", role: "Manager", status: "Active" },
  ];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
          Users Management
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-1">
          View, edit or manage all platform users.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="
              bg-slate-900 border border-slate-800 rounded-2xl
              p-4 sm:p-5
              flex flex-col justify-between
              min-h-[190px]
              hover:shadow-lg transition
            "
          >
            {/* User Info */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {user.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 truncate">
                {user.email}
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                Role: <span className="text-gray-300">{user.role}</span>
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  user.status === "Active"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {user.status}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 transition">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 transition">
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

export default UserManagement;
