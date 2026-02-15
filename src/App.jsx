import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Protected Route Component
import ProtectedRoute from "./components/ProtectedRoute";

// User Dashboard
import Sidebar from './Dashboards/user-dashboard/sidebar-layout/Sidebar';
import Header from "./comonents/header/Header";
import DashboardHome from "./Dashboards/user-dashboard/dashboard-overview/DashboardHome";
import Assets from "./Dashboards/user-dashboard/assets-library/Assets";
import FavoruiteLikes from "./Dashboards/user-dashboard/favorities-likes/FavoruiteLikes";
import Community from "./Dashboards/user-dashboard/community/Community";
import Contests from "./Dashboards/user-dashboard/contests/Contests";
import Reviews from "./Dashboards/user-dashboard/reviews-overview/Reviews";
import Subscription from "./Dashboards/user-dashboard/subscription-plan/Subscription";
import Payments from "./Dashboards/user-dashboard/payments/Payments";
import UserSettings from "./Dashboards/user-dashboard/setting-overview/Settings";

// Manager Dashboard
import ManagerSidebar from "./Dashboards/manager-admin/sidebar-layout/ManagerSidebar";
import DashboardManager from "./Dashboards/manager-admin/dashboard-overview/DashboardManager";
import AssetSubmission from "./Dashboards/manager-admin/asset-submissions/AssetSubmission";
import AssetModeration from "./Dashboards/manager-admin/assets-moderation/AssetModeration";
import CommunityModeration from "./Dashboards/manager-admin/community-moderation/CommunityModeration";
import ReviewModeration from "./Dashboards/manager-admin/reviews-moderation/ReviewModeration";
import ContestsManagement from "./Dashboards/manager-admin/contests-management/ContestsManagement";
import Reports from "./Dashboards/manager-admin/reports-overview/Reports";
import Settings from "./Dashboards/manager-admin/settings-overview/Settings";

// Super Admin Dashboard
import SuperAdminSidebar from "./Dashboards/super-admin/siderbar-layout/SuperAdminSidebar";
import UserManagement from "./Dashboards/super-admin/user-management/UserManagement";
import AssetsManagement from "./Dashboards/super-admin/assets-management/AssetsManagement";
import AdminManager from "./Dashboards/super-admin/admin-management/AdminManager";
import Categories from "./Dashboards/super-admin/categories/Categories";
import Approvals from "./Dashboards/super-admin/approvals/Approvals";
import ContestSuper from "./Dashboards/super-admin/contests/Contests";
import ReportsAnalytics from "./Dashboards/super-admin/reports-analytics/ReportsAnalytics";
import Setting from "./Dashboards/super-admin/setting-overview/Setting";

const App = () => {
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  // Get auth state from Redux
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // Determine dashboard role from URL
  const dashboardRole = location.pathname.startsWith("/manager")
    ? "manager"
    : location.pathname.startsWith("/super-admin")
    ? "super-admin"
    : "user";

  // Select sidebar based on dashboard role
  const SidebarComponent =
    dashboardRole === "manager"
      ? <ManagerSidebar isMobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
      : dashboardRole === "super-admin"
      ? <SuperAdminSidebar isMobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
      : <Sidebar isMobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />;

  // Show sidebar and header only on dashboard routes
  const isDashboardRoute = location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/manager") ||
    location.pathname.startsWith("/super-admin") ||
    location.pathname.startsWith("/assets") ||
    location.pathname.startsWith("/favorites") ||
    location.pathname.startsWith("/community") ||
    location.pathname.startsWith("/contests") ||
    location.pathname.startsWith("/reviews") ||
    location.pathname.startsWith("/subscription") ||
    location.pathname.startsWith("/payments") ||
    location.pathname.startsWith("/settings");

  return (
    <Routes>
      {/* ================== Public Routes (Auth) ================== */}
      <Route path="/login" element={isAuthenticated ? <Navigate to={role === 'super-admin' ? '/super-admin/users' : role === 'manager' ? '/manager' : '/dashboard'} replace /> : <Login />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to={role === 'super-admin' ? '/super-admin/users' : role === 'manager' ? '/manager' : '/dashboard'} replace /> : <Register />} />

      {/* ================== Root Redirect ================== */}
      <Route path="/" element={<Navigate to={isAuthenticated ? (role === 'super-admin' ? '/super-admin/users' : role === 'manager' ? '/manager' : '/dashboard') : '/login'} replace />} />

      {/* ================== Dashboard Routes (with Sidebar & Header) ================== */}
      <Route
        path="/*"
        element={
          isDashboardRoute ? (
            <div className="flex h-screen bg-slate-950 text-white">
              {/* Sidebar */}
              {SidebarComponent}

              {/* Main content */}
              <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header onSidebarToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

                {/* Page content */}
                <main className="flex-1 p-6 overflow-y-auto">
                  <Routes>
                    {/* ================== User Dashboard Routes ================== */}
                    <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['user']}><DashboardHome /></ProtectedRoute>} />
                    <Route path="/assets" element={<ProtectedRoute allowedRoles={['user']}><Assets /></ProtectedRoute>} />
                    <Route path="/favorites" element={<ProtectedRoute allowedRoles={['user']}><FavoruiteLikes /></ProtectedRoute>} />
                    <Route path="/community" element={<ProtectedRoute allowedRoles={['user']}><Community /></ProtectedRoute>} />
                    <Route path="/contests" element={<ProtectedRoute allowedRoles={['user']}><Contests /></ProtectedRoute>} />
                    <Route path="/reviews" element={<ProtectedRoute allowedRoles={['user']}><Reviews /></ProtectedRoute>} />
                    <Route path="/subscription" element={<ProtectedRoute allowedRoles={['user']}><Subscription /></ProtectedRoute>} />
                    <Route path="/payments" element={<ProtectedRoute allowedRoles={['user']}><Payments /></ProtectedRoute>} />
                    <Route path="/settings" element={<ProtectedRoute allowedRoles={['user']}><UserSettings /></ProtectedRoute>} />

                    {/* ================== Manager Dashboard Routes ================== */}
                    <Route path="/manager" element={<ProtectedRoute allowedRoles={['manager']}><DashboardManager /></ProtectedRoute>} />
                    <Route path="/manager/assets-submissions" element={<ProtectedRoute allowedRoles={['manager']}><AssetSubmission /></ProtectedRoute>} />
                    <Route path="/manager/assets-moderation" element={<ProtectedRoute allowedRoles={['manager']}><AssetModeration /></ProtectedRoute>} />
                    <Route path="/manager/community-moderation" element={<ProtectedRoute allowedRoles={['manager']}><CommunityModeration /></ProtectedRoute>} />
                    <Route path="/manager/reviews-moderation" element={<ProtectedRoute allowedRoles={['manager']}><ReviewModeration /></ProtectedRoute>} />
                    <Route path="/manager/contests" element={<ProtectedRoute allowedRoles={['manager']}><ContestsManagement /></ProtectedRoute>} />
                    <Route path="/manager/reports" element={<ProtectedRoute allowedRoles={['manager']}><Reports /></ProtectedRoute>} />
                    <Route path="/manager/settings" element={<ProtectedRoute allowedRoles={['manager']}><Settings /></ProtectedRoute>} />

                    {/* ================== Super Admin Dashboard Routes ================== */}
                    <Route path="/super-admin/users" element={<ProtectedRoute allowedRoles={['super_admin']}><UserManagement /></ProtectedRoute>} />
                    <Route path="/super-admin/assets" element={<ProtectedRoute allowedRoles={['super_admin']}><AssetsManagement /></ProtectedRoute>} />
                    <Route path="/super-admin/admins" element={<ProtectedRoute allowedRoles={['super_admin']}><AdminManager /></ProtectedRoute>} />
                    <Route path="/super-admin/categories" element={<ProtectedRoute allowedRoles={['super_admin']}><Categories /></ProtectedRoute>} />
                    <Route path="/super-admin/approvals" element={<ProtectedRoute allowedRoles={['super_admin']}><Approvals /></ProtectedRoute>} />
                    <Route path="/super-admin/contests" element={<ProtectedRoute allowedRoles={['super_admin']}><ContestSuper /></ProtectedRoute>} />
                    <Route path="/super-admin/reports" element={<ProtectedRoute allowedRoles={['super_admin']}><ReportsAnalytics /></ProtectedRoute>} />
                    <Route path="/super-admin/settings" element={<ProtectedRoute allowedRoles={['super_admin']}><Setting /></ProtectedRoute>} />
                  </Routes>
                </main>
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;