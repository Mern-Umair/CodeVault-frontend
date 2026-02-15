import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

const ContestSuper = () => {
  // Dummy data (baad me API se ayega)
  const contests = [
    { id: 1, name: "UI Design Challenge", organizer: "Ali Khan", startDate: "2026-02-01", endDate: "2026-02-10", status: "Active" },
    { id: 2, name: "React Hackathon", organizer: "Sara Ahmed", startDate: "2026-03-05", endDate: "2026-03-15", status: "Upcoming" },
    { id: 3, name: "Landing Page Contest", organizer: "Usman Dev", startDate: "2026-01-20", endDate: "2026-01-30", status: "Completed" },
  ];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100">
          Contests
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-1">
          View and manage all contests created on the platform.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="
              bg-slate-900 border border-slate-800 rounded-2xl
              p-4 sm:p-5
              flex flex-col justify-between
              min-h-[190px]
              hover:shadow-lg transition
            "
          >
            {/* Contest Info */}
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">
                {contest.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 truncate">
                Organizer: <span className="text-gray-300">{contest.organizer}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                Start: <span className="text-gray-300">{contest.startDate}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                End: <span className="text-gray-300">{contest.endDate}</span>
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  contest.status === "Active"
                    ? "bg-green-500/10 text-green-400"
                    : contest.status === "Upcoming"
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-gray-500/10 text-gray-400"
                }`}
              >
                {contest.status}
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
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestSuper;