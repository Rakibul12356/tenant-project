import { User, Mail, Shield, Calendar, Building2, Wallet } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="rounded-2xl border border-theme overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="px-6 py-5 border-b border-theme flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {user?.avatar || "U"}
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">{user?.name || "User"}</h2>
            <p className="text-sm text-secondary">Profile Overview</p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <p className="text-xs text-muted mb-1 flex items-center gap-2">
              <Mail size={13} /> Email
            </p>
            <p className="text-sm font-medium text-primary">{user?.email || "-"}</p>
          </div>

          <div className="p-4 rounded-xl border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <p className="text-xs text-muted mb-1 flex items-center gap-2">
              <Shield size={13} /> Role
            </p>
            <p className="text-sm font-medium text-primary capitalize">{user?.role || "-"}</p>
          </div>

          <div className="p-4 rounded-xl border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <p className="text-xs text-muted mb-1 flex items-center gap-2">
              <Calendar size={13} /> Joined
            </p>
            <p className="text-sm font-medium text-primary">{user?.joinedDate || "-"}</p>
          </div>

          {user?.role === "tenant" && (
            <>
              <div className="p-4 rounded-xl border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <p className="text-xs text-muted mb-1 flex items-center gap-2">
                  <Building2 size={13} /> Property
                </p>
                <p className="text-sm font-medium text-primary">{user?.propertyName || "-"}</p>
              </div>

              <div className="p-4 rounded-xl border border-theme sm:col-span-2" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <p className="text-xs text-muted mb-1 flex items-center gap-2">
                  <Wallet size={13} /> Rent Amount
                </p>
                <p className="text-sm font-semibold text-primary">{user?.rentAmount || "-"}</p>
              </div>
            </>
          )}

          {user?.role === "owner" && (
            <>
              <div className="p-4 rounded-xl border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <p className="text-xs text-muted mb-1">Total Properties</p>
                <p className="text-sm font-medium text-primary">{user?.properties ?? 0}</p>
              </div>

              <div className="p-4 rounded-xl border border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <p className="text-xs text-muted mb-1">Total Tenants</p>
                <p className="text-sm font-medium text-primary">{user?.tenants ?? 0}</p>
              </div>
            </>
          )}

          {!user && (
            <div className="sm:col-span-2 p-4 rounded-xl border border-theme text-sm text-secondary" style={{ backgroundColor: "var(--bg-secondary)" }}>
              User data unavailable.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
