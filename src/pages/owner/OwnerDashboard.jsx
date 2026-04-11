import { Building2, Users, DollarSign, FileText, Plus, AlertCircle, Clock, Home } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const STATS = [
  { icon: Building2, label: "Total Properties", value: "5", color: "#3b82f6" },
  { icon: Users, label: "Total Tenants", value: "8", color: "#10b981" },
  { icon: DollarSign, label: "Monthly Income", value: "৳ 85,000", color: "#f59e0b" },
  { icon: FileText, label: "Pending Bills", value: "3", color: "#ef4444" },
];

const PROPERTIES = [
  { id: 1, name: "Uttara House", address: "Uttara, Dhaka", beds: 3, tenants: 2, rent: "৳ 30,000", status: "Active" },
  { id: 2, name: "Gulshan Apartment", address: "Gulshan, Dhaka", beds: 2, tenants: 1, rent: "৳ 25,000", status: "Active" },
  { id: 3, name: "Dhanmondi House", address: "Dhanmondi, Dhaka", beds: 4, tenants: 2, rent: "৳ 40,000", status: "Active" },
  { id: 4, name: "Mirpur Flat", address: "Mirpur, Dhaka", beds: 2, tenants: 1, rent: "৳ 18,000", status: "Vacant" },
  { id: 5, name: "Demra Family House", address: "Demra, Dhaka", beds: 1, tenants: 2, rent: "৳ 12,000", status: "Active" },
];

const RECENT_NOTICES = [
  { id: 1, property: "Uttara House", title: "Rent Payment Reminder", date: "Mar 28", priority: "High" },
  { id: 2, property: "Gulshan Apartment", title: "Maintenance Work Completed", date: "Mar 25", priority: "Low" },
  { id: 3, property: "Mirpur Flat", title: "New Tenant Assigned", date: "Mar 22", priority: "Medium" },
];

const PENDING_BILLS = [
  { id: 1, tenant: "Rafikul Islam", property: "Uttara House", amount: "৳ 15,000", dueDate: "Mar 31", status: "Overdue" },
  { id: 2, tenant: "Farhan Rahim", property: "Gulshan Apartment", amount: "৳ 25,000", dueDate: "Apr 5", status: "Due Soon" },
  { id: 3, tenant: "Ayesha Akter", property: "Dhanmondi House", amount: "৳ 18,000", dueDate: "Apr 10", status: "Pending" },
];

export default function OwnerDashboard() {
  const { user } = useAuth();

  const handleAddProperty = () => {
    toast.info("Add property feature is coming soon...");
  };

  const handleManageTenant = (propertyId) => {
    toast.info(`Managing tenants for property #${propertyId}...`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary">
            Welcome, {user?.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-secondary text-sm mt-0.5">Manage all your properties, tenants, and bills</p>
        </div>
        <button
          onClick={handleAddProperty}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Plus size={16} /> Add Property
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
                <Building2 size={16} style={{ color: "var(--accent)" }} /> My Properties
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}>
                {PROPERTIES.length} Total
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                    {["Property Name", "Address", "Tenants", "Monthly Rent", "Status", "Action"].map((h) => (
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
                            style={{
                              backgroundColor: "var(--accent)",
                              width: "1.75rem",
                              height: "1.75rem",
                              borderRadius: "9999px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                            }}
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
                          {p.status === "Active" ? "Active" : "Vacant"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <button
                          onClick={() => handleManageTenant(p.id)}
                          className="text-xs font-medium text-white px-3 py-1 rounded-lg transition-all hover:opacity-90"
                          style={{ backgroundColor: "var(--accent)" }}
                        >
                          Manage
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
                <AlertCircle size={16} style={{ color: "#ef4444" }} /> Pending Bills
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
                      {bill.status === "Overdue" ? "Overdue" : bill.status === "Due Soon" ? "Due Soon" : "Pending"}
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
                <FileText size={16} style={{ color: "var(--accent)" }} /> Recent Notices
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
                      {notice.priority === "High" ? "High" : notice.priority === "Medium" ? "Medium" : "Low"}
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
