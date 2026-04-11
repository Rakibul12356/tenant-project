import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ProtectedRoute, GuestRoute } from "./utils/RouteGuards";

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import UserLayout from "./components/layout/UserLayout";
import OwnerLayout from "./components/layout/OwnerLayout";
import AdminLayout from "./components/layout/AdminLayout";

// Public Pages
import Home from "./pages/public/Home/Home";
import About from "./pages/public/About/About";
import Products from "./pages/public/Products/Products";
import Contact from "./pages/public/Contact/Contact";
import Login from "./pages/public/Login/Login";
import Register from "./pages/public/Register/Register";

// User Pages
import UserDashboard from "./pages/tenant/UserDashboard";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import UserProfile from "./pages/user/UserProfile";
import PlaceholderPage from "./pages/PlaceholderPage";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";

// Error Pages
import { NotFound, Unauthorized } from "./pages/ErrorPages";

function ToastWrapper() {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme={theme === "dark" ? "dark" : "light"}
      transition={Slide}
      toastStyle={{ borderRadius: "12px", fontSize: "14px" }}
    />
  );
}

function DashboardRedirect() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (user.role === "admin") return <Navigate to="/admin" replace />;
  if (user.role === "owner") return <Navigate to="/owner" replace />;
  return <Navigate to="/tenant" replace />;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <ToastWrapper />
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Auth Routes (guests only) */}
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path="/register"
              element={
                <GuestRoute>
                  <Register />
                </GuestRoute>
              }
            />

            {/* Legacy route support */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardRedirect />
                </ProtectedRoute>
              }
            />

            {/* Tenant Dashboard Routes */}
            <Route
              path="/tenant"
              element={
                <ProtectedRoute requiredRole="tenant">
                  <UserLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<UserDashboard />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="orders" element={<PlaceholderPage title="My Orders" desc="Your order history will appear here." />} />
              <Route path="wishlist" element={<PlaceholderPage title="Wishlist" desc="Your saved items will appear here." />} />
              <Route path="notifications" element={<PlaceholderPage title="Notifications" desc="Your notifications will appear here." />} />
              <Route path="settings" element={<PlaceholderPage title="Settings" desc="Account settings coming soon." />} />
              <Route path="help" element={<PlaceholderPage title="Help & Support" desc="Support resources coming soon." />} />
            </Route>

            {/* Owner/Bariwala Dashboard Routes */}
            <Route
              path="/owner"
              element={
                <ProtectedRoute requiredRole="owner">
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<OwnerDashboard />} />
              <Route path="properties" element={<PlaceholderPage title="My Properties" desc="View all your properties here." />} />
              <Route path="add" element={<PlaceholderPage title="Add Property" desc="Add a new property here." />} />
              <Route path="tenants" element={<PlaceholderPage title="Tenant Management" desc="View and manage your tenants here." />} />
              <Route path="bills" element={<PlaceholderPage title="Rent & Bills" desc="Manage rent and bills here." />} />
              <Route path="notices" element={<PlaceholderPage title="Notices" desc="Manage notices here." />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="settings" element={<PlaceholderPage title="Settings" desc="Change your settings here." />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<PlaceholderPage title="User Management" desc="Manage all users here." />} />
              <Route path="products" element={<PlaceholderPage title="Product Management" desc="Manage products here." />} />
              <Route path="orders" element={<PlaceholderPage title="Order Management" desc="Manage orders here." />} />
              <Route path="analytics" element={<PlaceholderPage title="Analytics" desc="Detailed analytics coming soon." />} />
              <Route path="reports" element={<PlaceholderPage title="Reports" desc="Generate reports here." />} />
              <Route path="notifications" element={<PlaceholderPage title="Notifications" desc="Manage notifications here." />} />
              <Route path="settings" element={<PlaceholderPage title="Admin Settings" desc="System settings coming soon." />} />
            </Route>

            {/* Error Pages */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
