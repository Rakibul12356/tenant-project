import { Building2, Users, DollarSign, FileText, Plus, AlertCircle, Clock, Home } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const STATS = [
  { icon: Building2, label: "মোট বাড়ি", value: "5", color: "#3b82f6" },
  { icon: Users, label: "মোট ভাড়াটে", value: "8", color: "#10b981" },
  { icon: DollarSign, label: "মাসিক আয়", value: "৳ 85,000", color: "#f59e0b" },
  { icon: FileText, label: "পেন্ডিং বিল", value: "3", color: "#ef4444" },
];

const PROPERTIES = [
  { id: 1, name: "উত্তরা বাড়ি", address: "উত্তরা, ঢাকা", beds: 3, tenants: 2, rent: "৳ 30,000", status: "Active" },
  { id: 2, name: "গুলশান অ্যাপার্টমেন্ট", address: "গুলশান, ঢাকা", beds: 2, tenants: 1, rent: "৳ 25,000", status: "Active" },
  { id: 3, name: "ধানমন্ডির বাড়ি", address: "ধানমন্ডি, ঢাকা", beds: 4, tenants: 2, rent: "৳ 40,000", status: "Active" },
  { id: 4, name: "মিরপুর ফ্ল্যাট", address: "মিরপুর, ঢাকা", beds: 2, tenants: 1, rent: "৳ 18,000", status: "Vacant" },
  { id: 5, name: "ডেমরা পরিবার", address: "ডেমরা, ঢাকা", beds: 1, tenants: 2, rent: "৳ 12,000", status: "Active" },
];

const RECENT_NOTICES = [
  { id: 1, property: "উত্তরা বাড়ি", title: "রেন্ট পেমেন্ট রিমাইন্ডার", date: "মার্চ 28", priority: "High" },
  { id: 2, property: "গুলশান অ্যাপার্টমেন্ট", title: "মেইনটেন্যান্স কাজ সম্পন্ন", date: "মার্চ 25", priority: "Low" },
  { id: 3, property: "মিরপুর ফ্ল্যাট", title: "নতুন ভাড়াটে নিয়োগ", date: "মার্চ 22", priority: "Medium" },
];

const PENDING_BILLS = [
  { id: 1, tenant: "রফিকুল ইসলাম", property: "উত্তরা বাড়ি", amount: "৳ 15,000", dueDate: "মার্চ 31", status: "Overdue" },
  { id: 2, tenant: "ফারহান রহিম", property: "গুলশান অ্যাপার্টমেন্ট", amount: "৳ 25,000", dueDate: "এপ্রিল 5", status: "Due Soon" },
  { id: 3, tenant: "আয়শা আক্তার", property: "ধানমন্ডি", amount: "৳ 18,000", dueDate: "এপ্রিল 10", status: "Pending" },
];

export default function OwnerDashboard() {
  const { user } = useAuth();

  const handleAddProperty = () => {
    toast.info("নতুন বাড়ি যোগ করা শীঘ্রই আসছে...");
  };

  const handleManageTenant = (propertyId) => {
    toast.info(`প্রপার্টি #${propertyId} এর জন্য ভাড়াটে ম্যানেজ করা হচ্ছে...`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary">
            স্বাগতম, {user?.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-secondary text-sm mt-0.5">আপনার সব বাড়ি, ভাড়াটে এবং বিল ম্যানেজ করুন</p>
        </div>
        <button
          onClick={handleAddProperty}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Plus size={16} /> নতুন বাড়ি যোগ করুন
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="p-5 rounded-2xl border border-theme" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                <Icon size={17} style={{ color }} />
              </div>
            </div>
            <p className="text-2xl font-bold text-primary">{value}</p>
            <p className="text-secondary text-xs mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Properties List */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Building2 size={16} style={{ color: "var(--accent)" }} /> আমার বাড়িগুলি
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}>
                {PROPERTIES.length} টি
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                    {["বাড়ির নাম", "ঠিকানা", "ভাড়াটে", "মাসিক ভাড়া", "স্ট্যাটাস", "অ্যাকশন"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROPERTIES.map((p) => (
                    <tr key={p.id} className="border-b border-theme last:border-0 hover:bg-secondary transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ backgroundColor: "var(--accent)" }}
                          >
                            {p.name[0]}
                          </div>
                          <span className="text-sm font-medium text-primary">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-secondary">{p.address}</td>
                      <td className="px-5 py-3.5 text-sm font-medium text-primary">{p.tenants}</td>
                      <td className="px-5 py-3.5 text-sm font-semibold text-primary">{p.rent}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={
                            p.status === "Active"
                              ? { color: "#10b981", backgroundColor: "#d1fae5" }
                              : { color: "#f59e0b", backgroundColor: "#fef3c7" }
                          }
                        >
                          {p.status === "Active" ? "সক্রিয়" : "খালি"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <button
                          onClick={() => handleManageTenant(p.id)}
                          className="text-xs font-medium text-white px-3 py-1 rounded-lg transition-all hover:opacity-90"
                          style={{ backgroundColor: "var(--accent)" }}
                        >
                          ম্যানেজ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar - Pending Bills & Recent Notices */}
        <div className="flex flex-col gap-6">
          {/* Pending Bills */}
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <AlertCircle size={16} style={{ color: "#ef4444" }} /> পেন্ডিং বিল
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {PENDING_BILLS.map((bill) => (
                <div key={bill.id} className="p-3 rounded-lg" style={{ backgroundColor: "var(--bg-secondary)" }}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-medium text-primary">{bill.tenant}</p>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={
                        bill.status === "Overdue"
                          ? { color: "#ef4444", backgroundColor: "#fee2e2" }
                          : bill.status === "Due Soon"
                          ? { color: "#f59e0b", backgroundColor: "#fef3c7" }
                          : { color: "#6366f1", backgroundColor: "#e0e7ff" }
                      }
                    >
                      {bill.status === "Overdue" ? "বাধ্যতামূলক" : bill.status === "Due Soon" ? "শীঘ্রই" : "অপেক্ষমান"}
                    </span>
                  </div>
                  <p className="text-xs text-secondary mb-1">{bill.property}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-primary">{bill.amount}</span>
                    <span className="text-xs text-muted">{bill.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notices */}
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <FileText size={16} style={{ color: "var(--accent)" }} /> সাম্প্রতিক নোটিশ
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {RECENT_NOTICES.map((notice) => (
                <div key={notice.id} className="p-3 rounded-lg border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs font-medium text-muted">{notice.property}</p>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={
                        notice.priority === "High"
                          ? { color: "#ef4444", backgroundColor: "#fee2e2" }
                          : notice.priority === "Medium"
                          ? { color: "#f59e0b", backgroundColor: "#fef3c7" }
                          : { color: "#10b981", backgroundColor: "#d1fae5" }
                      }
                    >
                      {notice.priority === "High" ? "জরুরি" : notice.priority === "Medium" ? "মধ্যম" : "সাধারণ"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-1">{notice.title}</p>
                  <p className="text-xs text-muted">{notice.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
