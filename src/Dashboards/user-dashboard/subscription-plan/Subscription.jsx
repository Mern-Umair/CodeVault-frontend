import React from "react";

const Subscription = () => {
  // Dummy subscription plans
  const plans = [
    {
      id: 1,
      name: "Free Plan",
      price: "$0 / month",
      features: ["Access to limited assets", "Community access"],
      recommended: false,
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "$15 / month",
      features: [
        "Unlimited asset downloads",
        "Access to premium templates",
        "Priority support",
      ],
      recommended: true,
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: "$50 / month",
      features: [
        "Team collaboration",
        "Custom asset requests",
        "Dedicated support",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="w-full h-full">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Subscriptions</h1>
        <p className="text-sm text-gray-400 mt-1">
          Choose a plan that fits your needs and unlock premium content.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 rounded-lg transition border ${
              plan.recommended
                ? "bg-indigo-600 border-indigo-500 shadow-lg"
                : "bg-slate-800 border-slate-700 hover:shadow-lg"
            }`}
          >
            {/* Plan Name & Price */}
            <h2 className="text-xl font-semibold text-gray-100 mb-2">
              {plan.name}
            </h2>
            <p className="text-gray-300 mb-4">{plan.price}</p>

            {/* Features */}
            <ul className="mb-4 space-y-1 text-gray-300 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-indigo-400">✔</span> {f}
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              className={`w-full px-4 py-2 rounded-lg text-white transition ${
                plan.recommended
                  ? "bg-slate-950 hover:bg-slate-800"
                  : "bg-indigo-500 hover:bg-indigo-600"
              }`}
            >
              {plan.recommended ? "Current Plan" : "Upgrade"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
