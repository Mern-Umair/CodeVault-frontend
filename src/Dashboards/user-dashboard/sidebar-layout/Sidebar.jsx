import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Boxes,
  Heart,
  Users,
  Trophy,
  Star,
  CreditCard,
  Wallet,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ isMobileOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleLinkClick = () => {
    if (onClose) onClose(); // Close sidebar on mobile after click
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:relative top-0 left-0 h-full bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 z-50
          ${collapsed ? "w-20" : "w-64"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo + Toggle */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          {!collapsed && (
            <h1 className="text-xl font-bold text-indigo-400">
              CodeVault
            </h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 text-sm overflow-y-auto">
          <SidebarLink to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/assets" icon={<Boxes size={18} />} label="Assets" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/favorites" icon={<Heart size={18} />} label="Favorites" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/community" icon={<Users size={18} />} label="Community" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/contests" icon={<Trophy size={18} />} label="Contests" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/reviews" icon={<Star size={18} />} label="Reviews" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/subscription" icon={<CreditCard size={18} />} label="Subscription" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/payments" icon={<Wallet size={18} />} label="Payments" collapsed={collapsed} onClick={handleLinkClick} />
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-slate-800 space-y-1">
          <SidebarLink to="/profile" icon={<User size={18} />} label="Profile" collapsed={collapsed} onClick={handleLinkClick} />
          <SidebarLink to="/settings" icon={<Settings size={18} />} label="Settings" collapsed={collapsed} onClick={handleLinkClick} />

          <button
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:text-red-500 hover:bg-slate-800 transition
              ${collapsed && "justify-center"}
            `}
          >
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ to, icon, label, collapsed, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-3 py-2 rounded-lg transition
        ${collapsed && "justify-center"}
        ${
          isActive
            ? "bg-indigo-500/10 text-indigo-400"
            : "text-gray-400 hover:bg-slate-800 hover:text-gray-200"
        }`
      }
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

export default Sidebar;
