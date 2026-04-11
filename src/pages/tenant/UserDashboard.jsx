import { FileText, DollarSign, Wrench, Bell, AlertCircle, CheckCircle, Clock, Package } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const STAT_ITEMS = [
  { icon: DollarSign, label: "Next Bill", value: "৳ 15,000", status: "Apr 5", color: "#3b82f6" },
  { icon: AlertCircle, label: "Outstanding Balance", value: "৳ 0", status: "Clear", color: "#10b981" },
  { icon: Wrench, label: "Maintenance Requests", value: "2", status: "In Progress", color: "#f59e0b" },
  { icon: FileText, label: "Unread Notices", value: "1", status: "New", color: "#ef4444" },
];

const MY_BILLS = [
  { id: 1, month: "Mar 2026", amount: "৳ 15,000", dueDate: "Mar 31", status: "Paid", paidDate: "Mar 28" },
  { id: 2, month: "Apr 2026", amount: "৳ 15,000", dueDate: "Apr 5", status: "Pending", paidDate: null },
  { id: 3, month: "May 2026", amount: "৳ 15,000", dueDate: "May 5", status: "Unpaid", paidDate: null },
];

const MY_NOTICES = [
  { id: 1, title: "Rent Payment Reminder", date: "Mar 28", priority: "High", read: false },
  { id: 2, title: "Maintenance Work Completed", date: "Mar 25", priority: "Low", read: true },
  { id: 3, title: "Water Tank Has Been Cleaned", date: "Mar 20", priority: "Low", read: true },
];

const MAINTENANCE_REQUESTS = [
  { id: 1, issue: "Air Conditioner Repair", date: "Mar 27", status: "In Progress", priority: "High" },
  { id: 2, issue: "Kitchen Sink Fixed", date: "Mar 25", status: "Completed", priority: "Medium" },
];

const STATUS_STYLES = {
  Paid: { color: "#10b981", bg: "#d1fae5" },
  Pending: { color: "#f59e0b", bg: "#fef3c7" },
  Unpaid: { color: "#ef4444", bg: "#fee2e2" },
  "In Progress": { color: "#f59e0b", bg: "#fef3c7" },
  Completed: { color: "#10b981", bg: "#d1fae5" },
};

export default function TenantDashboard() {
  const { user } = useAuth();

  const handlePayBill = (billId) => {
    toast.success("Bill payment will be available soon...");
  };

  const handleSubmitMaintenance = () => {
    toast.info("Maintenance request feature is coming soon...");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary">
            Welcome, {user?.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-secondary text-sm mt-0.5">Manage your bills, notices, and maintenance requests</p>
        </div>
      </div>

      {/* Property Info Banner */}
      <div className="p-5 rounded-2xl border border-theme" style={{ backgroundColor: "var(--accent-light)" }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-muted mb-1">Your Property</p>
            <h3 className="text-lg font-bold text-primary mb-1">{user?.propertyName}</h3>
            <p className="text-sm text-secondary">Monthly rent: <span className="font-semibold">{user?.rentAmount}</span></p>
          </div>
          <div
            className="px-4 py-2 rounded-lg text-white font-semibold text-sm"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Active
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_ITEMS.map(({ icon: Icon, label, value, status, color }) => (
          <div key={label} className="p-5 rounded-2xl border border-theme" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                <Icon size={17} style={{ color }} />
              </div>
            </div>
            <p className="text-2xl font-bold text-primary">{value}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-secondary text-xs">{label}</p>
              <span className="text-xs font-medium text-muted">{status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bills */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <DollarSign size={16} style={{ color: "var(--accent)" }} /> My Bills
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}>
                {MY_BILLS.length} items
              </span>
            </div>
            <div className="divide-y divide-theme">
              {MY_BILLS.map((bill) => (
                <div key={bill.id} className="p-4 hover:bg-secondary transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-primary">{bill.month}</p>
                      <p className="text-xs text-secondary mt-0.5">Due: {bill.dueDate}</p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        color: STATUS_STYLES[bill.status].color,
                        backgroundColor: STATUS_STYLES[bill.status].bg,
                      }}
                    >
                      {bill.status === "Paid" ? "Paid" : bill.status === "Pending" ? "Pending" : "Unpaid"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{bill.amount}</p>
                    {bill.status === "Pending" && (
                      <button
                        onClick={() => handlePayBill(bill.id)}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        Pay Now
                      </button>
                    )}
                    {bill.status === "Paid" && (
                      <span className="text-xs text-muted flex items-center gap-1">
                        <CheckCircle size={12} style={{ color: "#10b981" }} /> Paid {bill.paidDate}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Notices */}
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Bell size={16} style={{ color: "var(--accent)" }} /> Notices
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {MY_NOTICES.map((notice) => (
                <div
                  key={notice.id}
                  className="p-3 rounded-lg border border-theme"
                  style={{ backgroundColor: notice.read ? "transparent" : "var(--accent-light)" }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-primary">{notice.title}</p>
                    {!notice.read && (
                      <span className="w-2 h-2 rounded-full mt-1" style={{ backgroundColor: "var(--accent)" }} />
                    )}
                  </div>
                  <p className="text-xs text-secondary">{notice.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Requests */}
          <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Wrench size={16} style={{ color: "#f59e0b" }} /> Maintenance
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {MAINTENANCE_REQUESTS.map((req) => (
                <div key={req.id} className="p-3 rounded-lg" style={{ backgroundColor: "var(--bg-secondary)" }}>
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-primary">{req.issue}</p>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={{
                        color: STATUS_STYLES[req.status].color,
                        backgroundColor: STATUS_STYLES[req.status].bg,
                      }}
                    >
                      {req.status === "In Progress" ? "In Progress" : "Completed"}
                    </span>
                  </div>
                  <p className="text-xs text-secondary">{req.date}</p>
                </div>
              ))}
              <button
                onClick={handleSubmitMaintenance}
                className="w-full mt-2 px-3 py-2 rounded-lg font-semibold text-sm transition-all hover:opacity-90 text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Submit New Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
