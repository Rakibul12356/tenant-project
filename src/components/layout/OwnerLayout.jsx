import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";
import DashboardHeader from "./DashboardHeader";

const TITLES = {
  "/owner": "ওভারভিউ",
  "/owner/properties": "আমার সম্পত্তি",
  "/owner/add": "নতুন সম্পত্তি যোগ করুন",
  "/owner/tenants": "ভাড়াটে ম্যানেজমেন্ট",
  "/owner/bills": "রেন্ট & বিল ম্যানেজমেন্ট",
  "/owner/notices": "নোটিশ ম্যানেজমেন্ট",
  "/owner/profile": "প্রোফাইল",
  "/owner/settings": "সেটিংস",
};

export default function OwnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const title = TITLES[pathname] || "ড্যাশবোর্ড";

  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <OwnerSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
