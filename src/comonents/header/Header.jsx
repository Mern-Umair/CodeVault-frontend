import React, { useState } from "react";
import { Bell, Sun, Moon, ChevronDown, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ onSidebarToggle }) => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, role } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); // Clear Redux state + localStorage
    navigate('/login'); // Redirect to login
  };

  return (
    <header className="w-full h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 md:px-6">
      
      {/* Left: Hamburger + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger only on small screens */}
        <button
          className="md:hidden text-gray-400 hover:text-indigo-400 transition"
          onClick={onSidebarToggle}
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg font-semibold text-gray-100">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 relative">

        {/* Notifications */}
        <button className="relative text-gray-400 hover:text-indigo-400 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dark / Light Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="text-gray-400 hover:text-indigo-400 transition"
        >
          {dark ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Role Badge (Dynamic) */}
        <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 capitalize">
          {role || 'User'}
        </span>

        {/* User Dropdown Trigger */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="text-right">
            <p className="text-sm text-gray-200 font-medium">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-400">
              Online
            </p>
          </div>

          <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>

          <ChevronDown size={16} className="text-gray-400" />
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 top-14 w-44 bg-slate-800 border border-slate-700 rounded-lg shadow-lg overflow-hidden z-50">
            <button 
              onClick={() => {
                setOpen(false);
                navigate('/dashboard');
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-200 hover:bg-slate-700"
            >
              Dashboard
            </button>

            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-slate-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;