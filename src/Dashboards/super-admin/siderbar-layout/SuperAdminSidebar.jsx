import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  User,
  Boxes,
  Trophy,
  CreditCard,
  Settings,
  FileText,
  Star,
  X,
} from "lucide-react";

const SuperAdminSidebar = ({ isMobileOpen, onClose }) => {
  const modules = [
    { name: "Dashboard", path: "/super-admin", icon: <LayoutDashboard size={18} /> },
    { name: "Users Management", path: "/super-admin/users", icon: <Users size={18} /> },
    { name: "Admins / Managers", path: "/super-admin/admins", icon: <User size={18} /> },
    { name: "Assets Management", path: "/super-admin/assets", icon: <Boxes size={18} /> },
    { name: "Categories", path: "/super-admin/categories", icon: <Star size={18} /> },
    { name: "Approvals", path: "/super-admin/approvals", icon: <CreditCard size={18} /> },
    { name: "Contests", path: "/super-admin/contests", icon: <Trophy size={18} /> },
    { name: "Reports & Analytics", path: "/super-admin/reports", icon: <FileText size={18} /> },
    { name: "Settings", path: "/super-admin/settings", icon: <Settings size={18} /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          h-screen w-64
          bg-slate-900 border-r border-slate-800
          flex flex-col
          transition-transform duration-300
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          <h1 className="text-xl font-bold text-indigo-400">AdminPanel</h1>

          {/* Close button (mobile only) */}
          <button
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-red-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5 space-y-1 text-sm overflow-y-auto">
          {modules.map((mod) => (
            <NavLink
              key={mod.name}
              to={mod.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition
                 ${
                   isActive
                     ? "bg-indigo-500/10 text-indigo-400"
                     : "text-gray-400 hover:bg-slate-800 hover:text-gray-200"
                 }`
              }
            >
              {mod.icon}
              <span className="font-medium">{mod.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 text-xs text-gray-400 border-t border-slate-800">
          Super Admin Dashboard
        </div>
      </aside>
    </>
  );
};

export default SuperAdminSidebar;
