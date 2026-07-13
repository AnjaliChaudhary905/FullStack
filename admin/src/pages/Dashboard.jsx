import { NavLink, Outlet } from "react-router-dom";
import { Users, ShoppingBag, BookOpen } from "lucide-react";

const Dashboard = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-emerald-600 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
    }`;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Admin Panel
          </p>
          <h1 className="text-2xl font-bold text-gray-800 mt-1">
            Management Hub
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/user-management" className={navLinkClass}>
            <Users size={20} />
            <span>User Management</span>
          </NavLink>

          <NavLink to="/food-management" className={navLinkClass}>
            <BookOpen size={20} />
            <span>Food Management</span>
          </NavLink>

          <NavLink to="/order-management" className={navLinkClass}>
            <ShoppingBag size={20} />
            <span>Order Management</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h2>
            <p className="text-sm text-gray-500">
              Welcome to your management system
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <h3 className="font-semibold text-gray-800">Admin</h3>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>

            <div className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Pages */}
        <section className="p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;