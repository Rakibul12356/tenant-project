import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { adminSidebarConfig } from "./sidebarConfigs";
import AdminHeader from "./AdminHeader";

const TITLES = {
  "/admin": "Dashboard",
  "/admin/users": "Users",
  "/admin/products": "Products",
  "/admin/orders": "Orders",
  "/admin/analytics": "Analytics",
  "/admin/reports": "Reports",
  "/admin/notifications": "Notifications",
  "/admin/settings": "Settings",
};

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const title = TITLES[pathname] || "Admin Panel";

  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} config={adminSidebarConfig} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
