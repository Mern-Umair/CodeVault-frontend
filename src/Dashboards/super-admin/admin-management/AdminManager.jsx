import React from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";

const AdminManager = () => {
  // Dummy data (baad me API se ayega)
  const admins = [
    { id: 1, name: "Ali Khan", email: "ali@example.com", role: "Manager", status: "Active" },
    { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Admin", status: "Inactive" },
    { id: 3, name: "Usman Dev", email: "usman@example.com", role: "Manager", status: "Active" },
  ];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
          Admins / Managers
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-1">
          Manage platform admins and managers. Activate, deactivate or view details.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="
              bg-slate-900 border border-slate-800 rounded-2xl
              p-4 sm:p-5
              flex flex-col justify-between
              min-h-[190px]
              hover:shadow-lg transition
            "
          >
            {/* Admin Info */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {admin.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 truncate">
                {admin.email}
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                Role: <span className="text-gray-300">{admin.role}</span>
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  admin.status === "Active"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {admin.status}
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

export default AdminManager;