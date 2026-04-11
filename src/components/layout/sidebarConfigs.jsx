import {
  LayoutDashboard,
  User,
  Settings,
  ShoppingBag,
  Heart,
  Bell,
  HelpCircle,
  Zap,
  Building2,
  Users,
  DollarSign,
  FileText,
  Shield,
  BarChart3,
  Tag,
} from "lucide-react";

export const tenantSidebarConfig = {
  brand: {
    icon: Zap,
    label: "Bolt",
    highlight: "UI",
  },
  menuTitle: "Main Menu",
  navItems: [
    { icon: LayoutDashboard, label: "Overview", to: "/tenant", end: true },
    { icon: ShoppingBag, label: "My Orders", to: "/tenant/orders" },
    { icon: Heart, label: "Wishlist", to: "/tenant/wishlist" },
    { icon: Bell, label: "Notifications", to: "/tenant/notifications" },
    { icon: User, label: "Profile", to: "/tenant/profile" },
    { icon: Settings, label: "Settings", to: "/tenant/settings" },
  ],
  bottomItems: [{ icon: HelpCircle, label: "Help & Support", to: "/tenant/help" }],
  userSubtitle: (user) => user?.email,
  logoutLabel: "Logout",
};

export const ownerSidebarConfig = {
  brand: {
    icon: Building2,
    label: "Landlord",
    highlight: "Panel",
  },
  menuTitle: "Main Menu",
  navItems: [
    { icon: LayoutDashboard, label: "Overview", to: "/owner", end: true },
    { icon: Building2, label: "My Properties", to: "/owner/properties" },
    { icon: Users, label: "Tenant Management", to: "/owner/tenants" },
    { icon: DollarSign, label: "Rent & Bills", to: "/owner/bills" },
    { icon: FileText, label: "Notices", to: "/owner/notices" },
    { icon: User, label: "Profile", to: "/owner/profile" },
    { icon: Settings, label: "Settings", to: "/owner/settings" },
  ],
  userSubtitle: () => "Landlord",
  logoutLabel: "Logout",
};

export const adminSidebarConfig = {
  sidebarBg: "#050a14",
  avatarBg: "#f97316",
  activeStyle: { backgroundColor: "#f97316", color: "#fff" },
  brand: {
    icon: Shield,
    iconBg: "#f97316",
    label: "Admin",
    highlight: "Panel",
    highlightColor: "#f97316",
  },
  menuTitle: "Admin Menu",
  navItems: [
    { icon: LayoutDashboard, label: "Dashboard", to: "/admin", end: true },
    { icon: Users, label: "Users", to: "/admin/users" },
    { icon: ShoppingBag, label: "Products", to: "/admin/products" },
    { icon: Tag, label: "Orders", to: "/admin/orders" },
    { icon: BarChart3, label: "Analytics", to: "/admin/analytics" },
    { icon: FileText, label: "Reports", to: "/admin/reports" },
    { icon: Bell, label: "Notifications", to: "/admin/notifications" },
    { icon: Settings, label: "Settings", to: "/admin/settings" },
  ],
  bottomItems: [{ icon: LayoutDashboard, label: "Public Home", to: "/" }],
  userBadge: {
    icon: Shield,
    text: "Administrator",
    color: "#fb923c",
  },
  logoutLabel: "Logout",
};
