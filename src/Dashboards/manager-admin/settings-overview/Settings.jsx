import React, { useState } from "react";

const Settings = () => {
  const [account, setAccount] = useState({
    name: "Ali Khan",
    email: "ali@example.com",
    password: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    system: true,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
  });

  const handleAccountChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleNotificationToggle = (field) => {
    setNotifications({ ...notifications, [field]: !notifications[field] });
  };

  const handleSecurityToggle = () => {
    setSecurity({ ...security, twoFactorAuth: !security.twoFactorAuth });
  };

  return (
    <div className="w-full h-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-100">
          Settings
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Update your manager account settings and preferences.
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-8">

        {/* Account Section */}
        <div>
          <h2 className="text-xl font-medium text-gray-100 mb-4">Account Information</h2>
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={account.name}
              onChange={handleAccountChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-slate-800 text-gray-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={account.email}
              onChange={handleAccountChange}
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-slate-800 text-gray-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="password"
              value={account.password}
              onChange={handleAccountChange}
              placeholder="New Password"
              className="w-full p-3 rounded-lg bg-slate-800 text-gray-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
              Save Account
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <h2 className="text-xl font-medium text-gray-100 mb-4">Notifications</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() => handleNotificationToggle("email")}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-gray-300">Email Notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={notifications.system}
                onChange={() => handleNotificationToggle("system")}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-gray-300">System Notifications</span>
            </label>
          </div>
        </div>

        {/* Security Section */}
        <div>
          <h2 className="text-xl font-medium text-gray-100 mb-4">Security</h2>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={security.twoFactorAuth}
              onChange={handleSecurityToggle}
              className="w-4 h-4 accent-indigo-500"
            />
            <span className="text-gray-300">Enable Two-Factor Authentication</span>
          </label>
        </div>

      </div>
    </div>
  );
};

export default Settings;
