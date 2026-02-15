import React from "react";
import { Eye } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: 1,
      reportedBy: "Ali Khan",
      type: "Asset",
      title: "Modern Dashboard UI Kit",
      status: "Pending",
    },
    {
      id: 2,
      reportedBy: "Sara Ahmed",
      type: "Community Post",
      title: "Navbar Component Issue",
      status: "Pending",
    },
    {
      id: 3,
      reportedBy: "Usman Dev",
      type: "Contest",
      title: "Landing Page Contest Submission",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full h-full p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100">
          Reports
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          Review and manage user-submitted reports.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-48 hover:shadow-lg transition"
          >
            {/* Info */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-100 truncate">
                {report.title}
              </h3>
              <p className="text-sm text-gray-400">
                Reported by: {report.reportedBy}
              </p>
              <p className="text-sm text-gray-400">
                Type: {report.type}
              </p>
            </div>

            {/* Status + Action */}
            <div className="mt-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                {report.status}
              </span>

              <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 transition">
                <Eye size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
