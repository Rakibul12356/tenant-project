import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { ownerSidebarConfig } from "./sidebarConfigs";
import DashboardHeader from "./DashboardHeader";

const TITLES = {
  "/owner": "Overview",
  "/owner/properties": "My Properties",
  "/owner/add": "Add Property",
  "/owner/tenants": "Tenant Management",
  "/owner/bills": "Rent & Bill Management",
  "/owner/notices": "Notice Management",
  "/owner/profile": "Profile",
  "/owner/settings": "Settings",
};

export default function OwnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const title = TITLES[pathname] || "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} config={ownerSidebarConfig} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
