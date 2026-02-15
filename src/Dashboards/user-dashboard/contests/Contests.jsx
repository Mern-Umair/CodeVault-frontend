import React from "react";

const Contests = () => {
  // Dummy contests data
  const contests = [
    {
      id: 1,
      title: "Landing Page Design Contest",
      description: "Create the best modern landing page using React & Tailwind.",
      participants: 12,
      votes: 56,
      deadline: "2026-02-10",
    },
    {
      id: 2,
      title: "Navbar Component Challenge",
      description: "Build reusable and animated navbars.",
      participants: 8,
      votes: 34,
      deadline: "2026-02-15",
    },
    {
      id: 3,
      title: "Dashboard UI Showdown",
      description: "Design a professional dashboard layout.",
      participants: 20,
      votes: 78,
      deadline: "2026-02-20",
    },
  ];

  return (
    <div className="w-full h-full">
      
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Contests</h1>
          <p className="text-sm text-gray-400 mt-1">
            Vote for the best designs and participate in ongoing contests.
          </p>
        </div>
        <button className="px-4 py-2 whitespace-nowrap bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
          Create Contest
        </button>
      </div>

      {/* Contests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="bg-slate-800 rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Contest Title */}
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              {contest.title}
            </h2>

            {/* Contest Description */}
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">
              {contest.description}
            </p>

            {/* Contest Info */}
            <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
              <span>Participants: {contest.participants}</span>
              <span>Votes: {contest.votes}</span>
            </div>

            {/* Deadline */}
            <p className="text-xs text-gray-500 mb-3">
              Deadline: {contest.deadline}
            </p>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <button className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition text-sm">
                Vote
              </button>
              <button className="px-3 py-1 border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition text-sm">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contests;
