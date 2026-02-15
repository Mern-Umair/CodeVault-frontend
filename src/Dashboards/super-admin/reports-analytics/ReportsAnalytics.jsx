import React from "react";
import { Eye, Download } from "lucide-react";

const ReportsAnalytics = () => {
  // Dummy data (baad me API se ayega)
  const reports = [
    { id: 1, name: "Monthly Revenue Report", type: "Finance", createdBy: "Admin1", date: "2026-01-25", status: "Completed" },
    { id: 2, name: "User Growth Analysis", type: "Users", createdBy: "Admin2", date: "2026-01-20", status: "Completed" },
    { id: 3, name: "Contest Participation", type: "Contests", createdBy: "Admin3", date: "2026-01-22", status: "Pending" },
  ];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
          Reports & Analytics
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-1">
          View, analyze and download platform reports.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {reports.map((report) => (
          <div
            key={report.id}
            className="
              bg-slate-900 border border-slate-800 rounded-2xl
              p-4 sm:p-5
              flex flex-col justify-between
              min-h-[190px]
              hover:shadow-lg transition
            "
          >
            {/* Report Info */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {report.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400">
                Type: <span className="text-gray-300">{report.type}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-400 truncate">
                Created By: <span className="text-gray-300">{report.createdBy}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                Date: <span className="text-gray-300">{report.date}</span>
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  report.status === "Completed"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {report.status}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 transition">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsAnalytics;