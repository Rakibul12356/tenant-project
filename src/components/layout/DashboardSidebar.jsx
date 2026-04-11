import { NavLink, Link } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function SidebarItem({ item, onClose, activeStyle }) {
  const { icon: Icon, label, to, end } = item;

  return (
    <NavLink
      key={to}
      to={to}
      end={!!end}
      onClick={onClose}
      className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
      style={({ isActive }) => (isActive && activeStyle ? activeStyle : undefined)}
    >
      <Icon size={17} />
      <span>{label}</span>
    </NavLink>
  );
}

export default function DashboardSidebar({ open, onClose, config }) {
  const { user, logout } = useAuth();
  const BrandIcon = config.brand.icon;
  const BadgeIcon = config.userBadge?.icon;

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={onClose} />}

      <aside
        className={`fixed top-0 left-0 h-full z-40 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: config.sidebarBg || "var(--bg-sidebar)" }}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b" style={{ borderColor: "#1e293b" }}>
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{ backgroundColor: config.brand.iconBg || "var(--accent)" }}
            >
              <BrandIcon size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              {config.brand.label}
              {config.brand.highlight && <span style={{ color: config.brand.highlightColor || "var(--accent)" }}>{config.brand.highlight}</span>}
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-4 border-b" style={{ borderColor: "#1e293b" }}>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ backgroundColor: config.avatarBg || "var(--accent)" }}
            >
              {user?.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{user?.name}</p>
              {config.userBadge ? (
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium"
                  style={{ color: config.userBadge.color }}
                >
                  {BadgeIcon && <BadgeIcon size={10} />} {config.userBadge.text}
                </span>
              ) : (
                <p className="text-slate-400 text-xs truncate">{config.userSubtitle?.(user) || user?.email}</p>
              )}
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">{config.menuTitle}</p>
          <div className="flex flex-col gap-0.5">
            {config.navItems.map((item) => (
              <SidebarItem key={item.to} item={item} onClose={onClose} activeStyle={config.activeStyle} />
            ))}
          </div>
        </nav>

        <div className="px-3 py-4 border-t" style={{ borderColor: "#1e293b" }}>
          {config.bottomItems?.map((item) => (
            <SidebarItem key={item.to} item={item} onClose={onClose} activeStyle={config.activeStyle} />
          ))}

          <button
            onClick={() => {
              logout();
              onClose?.();
            }}
            className="sidebar-item w-full mt-1 text-red-400 hover:text-red-300 hover:bg-red-900/20"
          >
            <LogOut size={17} />
            <span>{config.logoutLabel || "Logout"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
