import React, { useState } from "react";

const Setting = () => {
  const [accountInfo, setAccountInfo] = useState({
    name: "Super Admin",
    email: "superadmin@example.com",
    password: "",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    systemAlerts: false,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
  });

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo({ ...accountInfo, [name]: value });
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSecurityChange = (e) => {
    const { name, checked } = e.target;
    setSecurity({ ...security, [name]: checked });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
    // future: API call to save settings
  };

  return (
    <div className="w-full h-full space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-100">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">
          Update your Super Admin account and platform settings.
        </p>
      </div>

      {/* Account Info */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-medium text-gray-100">Account Information</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={accountInfo.name}
            onChange={handleAccountChange}
            className="bg-slate-800 text-gray-100 p-2 rounded-md border border-slate-700"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={accountInfo.email}
            onChange={handleAccountChange}
            className="bg-slate-800 text-gray-100 p-2 rounded-md border border-slate-700"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={accountInfo.password}
            onChange={handleAccountChange}
            className="bg-slate-800 text-gray-100 p-2 rounded-md border border-slate-700"
            placeholder="New Password"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-medium text-gray-100">Notifications</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-gray-200">
            <input
              type="checkbox"
              name="emailAlerts"
              checked={notifications.emailAlerts}
              onChange={handleNotificationsChange}
              className="accent-indigo-400"
            />
            Email Alerts
          </label>
          <label className="flex items-center gap-2 text-gray-200">
            <input
              type="checkbox"
              name="systemAlerts"
              checked={notifications.systemAlerts}
              onChange={handleNotificationsChange}
              className="accent-indigo-400"
            />
            System Alerts
          </label>
        </div>
      </div>

      {/* Security */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-medium text-gray-100">Security</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-gray-200">
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={security.twoFactorAuth}
              onChange={handleSecurityChange}
              className="accent-indigo-400"
            />
            Two-Factor Authentication
          </label>
          <label className="flex items-center gap-2 text-gray-200">
            <input
              type="checkbox"
              name="loginAlerts"
              checked={security.loginAlerts}
              onChange={handleSecurityChange}
              className="accent-indigo-400"
            />
            Login Alerts
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Setting;
