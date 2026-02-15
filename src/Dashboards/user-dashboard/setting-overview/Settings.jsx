import React from "react";

const Settings = () => {
  return (
    <div className="w-full h-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your profile, account, and preferences.
        </p>
      </div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Profile Settings */}
        <div className="bg-slate-800 rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">Profile</h2>
          <p className="text-sm text-gray-300 mb-4">
            Update your name, avatar, and personal information.
          </p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Edit Profile
          </button>
        </div>

        {/* Account Settings */}
        <div className="bg-slate-800 rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">Account</h2>
          <p className="text-sm text-gray-300 mb-4">
            Change email, password, or manage account security.
          </p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Manage Account
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-slate-800 rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">Preferences</h2>
          <p className="text-sm text-gray-300 mb-4">
            Configure theme, notifications, and dashboard layout.
          </p>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Update Preferences
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
        