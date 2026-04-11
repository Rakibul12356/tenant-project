import { Users, Building2, DollarSign, TrendingUp, ArrowUpRight, Activity, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";

const STATS = [
  { icon: Building2, label: "Total Landlords", value: "152", change: "+12 this month", color: "#3b82f6" },
  { icon: DollarSign, label: "Total Properties", value: "847", change: "+45 this month", color: "#10b981" },
  { icon: Users, label: "Active Tenants", value: "3,284", change: "+128 this week", color: "#f59e0b" },
  { icon: TrendingUp, label: "Total Revenue", value: "৳ 15,42,000", change: "+8.5% this month", color: "#ec4899" },
];

const RECENT_OWNERS = [
  { id: 1, name: "Mohammad Karim", email: "karim@example.com", joined: "Mar 28", properties: 5, tenants: 8, status: "Active" },
  { id: 2, name: "Farhan Rahim", email: "farhan@example.com", joined: "Mar 25", properties: 3, tenants: 4, status: "Active" },
  { id: 3, name: "Ayesha Begum", email: "aysha@example.com", joined: "Mar 20", properties: 7, tenants: 9, status: "Pending" },
  { id: 4, name: "Rafikul Islam", email: "rofiq@example.com", joined: "Mar 18", properties: 2, tenants: 3, status: "Active" },
  { id: 5, name: "Mrs. Khana", email: "khana@example.com", joined: "Mar 15", properties: 4, tenants: 5, status: "Inactive" },
];

const PENDING_VERIFICATIONS = [
  { id: 1, name: "Salman", email: "salman@example.com", date: "Mar 27", docs: "Pending", action: "Review" },
  { id: 2, name: "Najma", email: "najma@example.com", date: "Mar 26", docs: "Pending", action: "Review" },
  { id: 3, name: "Karim", email: "karim2@example.com", date: "Mar 25", docs: "Approved", action: "Activate" },
];

export default function AdminDashboard() {
  const handleApproveOwner = (id) => {
    toast.success(`Landlord #${id} has been approved`);
  };

  const handleSuspendOwner = (id) => {
    toast.warning(`Landlord #${id} has been suspended`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-primary">Admin Overview</h2>
        <p className="text-secondary text-sm mt-0.5">View the full system overview and manage landlords.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map(({ icon: Icon, label, value, change, color }) => (
          <div key={label} className="p-5 rounded-2xl border border-theme" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                <Icon size={17} style={{ color }} />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: "#10b981", backgroundColor: "#d1fae5" }}>
                {change}
              </span>
            </div>
            <p className="text-2xl font-bold text-primary">{value}</p>
            <p className="text-secondary text-xs mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Owners Table */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Building2 size={16} style={{ color: "#3b82f6" }} /> Active Landlords
              </h3>
              <button className="text-xs text-blue-500 hover:underline font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                    {["Name", "Email", "Properties", "Tenants", "Joined", "Status"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RECENT_OWNERS.map((o) => (
                    <tr key={o.id} className="border-b border-theme last:border-0 hover:bg-secondary transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: "var(--accent)" }}
                          >
                            {o.name[0]}
                          </div>
                          <span className="text-sm font-medium text-primary">{o.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-secondary">{o.email}</td>
                      <td className="px-5 py-3.5 text-sm font-medium">{o.properties}</td>
                      <td className="px-5 py-3.5 text-sm font-medium">{o.tenants}</td>
                      <td className="px-5 py-3.5 text-sm text-secondary">{o.joined}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={
                            o.status === "Active"
                              ? { color: "#10b981", backgroundColor: "#d1fae5" }
                              : o.status === "Pending"
                              ? { color: "#f59e0b", backgroundColor: "#fef3c7" }
                              : { color: "#94a3b8", backgroundColor: "var(--bg-secondary)" }
                          }
                        >
                          {o.status === "Active" ? "Active" : o.status === "Pending" ? "Pending" : "Inactive"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pending Verifications */}
        <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
              <AlertCircle size={16} className="text-orange-500" /> Pending Approvals
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {PENDING_VERIFICATIONS.map((item) => (
              <div key={item.id} className="p-3 rounded-lg border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium text-primary">{item.name}</p>
                    <p className="text-xs text-muted mt-0.5">{item.email}</p>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded text-xs font-semibold"
                    style={
                      item.docs === "Pending"
                        ? { color: "#f59e0b", backgroundColor: "#fef3c7" }
                        : { color: "#10b981", backgroundColor: "#d1fae5" }
                    }
                  >
                    {item.docs === "Pending" ? "Pending" : "Approved"}
                  </span>
                </div>
                <p className="text-xs text-secondary mb-2">{item.date}</p>
                <div className="flex gap-2">
                  {item.action === "Review" ? (
                    <>
                      <button
                        onClick={() => handleApproveOwner(item.id)}
                        className="flex-1 px-2 py-1 rounded text-xs font-semibold text-white bg-green-600 hover:bg-green-700 transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleSuspendOwner(item.id)}
                        className="flex-1 px-2 py-1 rounded text-xs font-semibold text-red-600 border border-red-600 hover:bg-red-50 transition"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleApproveOwner(item.id)}
                      className="w-full px-2 py-1 rounded text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                      Activate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
