import React from "react";
import { CheckCircle, XCircle, Eye } from "lucide-react";

const ContestsManagement = () => {
  const contests = [
    {
      id: 1,
      title: "UI Design Challenge",
      participants: 120,
      deadline: "25 Aug 2026",
      status: "Active",
    },
    {
      id: 2,
      title: "React Components Contest",
      participants: 85,
      deadline: "10 Sep 2026",
      status: "Pending",
    },
    {
      id: 3,
      title: "Landing Page Competition",
      participants: 200,
      deadline: "01 Oct 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full h-full p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100">
          Contests Management
        </h1>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          Manage contests, review submissions and control contest status.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-48 hover:shadow-lg transition"
          >
            {/* Info */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-100 truncate">
                {contest.title}
              </h3>
              <p className="text-sm text-gray-400">
                Participants: {contest.participants}
              </p>
              <p className="text-sm text-gray-400">
                Deadline: {contest.deadline}
              </p>
            </div>

            {/* Status + Actions */}
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  contest.status === "Active"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {contest.status}
              </span>

              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400">
                  <CheckCircle size={16} />
                </button>
                <button className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400">
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

export default ContestsManagement;
