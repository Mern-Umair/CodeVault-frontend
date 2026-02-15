import React from "react";

const Payments = () => {
  // Dummy payments data
  const payments = [
    {
      id: 1,
      plan: "Pro Plan",
      amount: "$15",
      status: "Completed",
      date: "2026-01-20",
      transactionId: "TXN12345",
    },
    {
      id: 2,
      plan: "Free Plan",
      amount: "$0",
      status: "Completed",
      date: "2026-01-10",
      transactionId: "TXN12344",
    },
    {
      id: 3,
      plan: "Enterprise Plan",
      amount: "$50",
      status: "Pending",
      date: "2026-01-28",
      transactionId: "TXN12346",
    },
  ];

  return (
    <div className="w-full h-full">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Payments</h1>
        <p className="text-sm text-gray-400 mt-1">
          View your payment history and status for all subscriptions.
        </p>
      </div>

      {/* Payments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-slate-800 rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Plan & Amount */}
            <h2 className="text-lg font-semibold text-gray-100 mb-1">
              {payment.plan}
            </h2>
            <p className="text-gray-300 mb-2">{payment.amount}</p>

            {/* Status */}
            <p
              className={`text-sm font-medium mb-2 ${
                payment.status === "Completed"
                  ? "text-green-400"
                  : payment.status === "Pending"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {payment.status}
            </p>

            {/* Transaction ID & Date */}
            <p className="text-xs text-gray-500 mb-3">
              Transaction: {payment.transactionId}
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Date: {payment.date}
            </p>

            {/* Action */}
            <button className="px-3 py-1 w-full bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;
