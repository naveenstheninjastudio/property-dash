import { Outlet, Link } from "react-router-dom";
import {
  Home,
  Building2,
  Users,
  CreditCard,
  Settings,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function Landing() {
  const [SidebarOpen, SetSidebarOpen] = useState(true);

  const toggleSidebar = () => SetSidebarOpen(!SidebarOpen);

  return (
    <div className="flex h-screen w-screen bg-linear-to-b from-[#1a1a1a] via-[#0d0d0d] to-black shadow-xl text-white">
      <aside
        className={`relative transition-all duration-500 ease-in-out ${
          SidebarOpen ? "w-20" : "w-60"
        } p-5 shadow-xl`}
      >
        <div className="absolute inset-0 bg-linear-to-trpointer-events-none" />
        <div className="relative z-10">
          <div className="text-lg font-semibold mb-6 tracking-wide">
            {!SidebarOpen ? "Dashboard Logo" : "Logo"}
          </div>
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-800/40 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-800/60 hover:bg-neutral-700/60 transition"
            >
              <Home className="w-4 h-4" />
              {!SidebarOpen && "Home"}
            </Link>

            <Link
              to="/properties"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800/40 transition"
            >
              <Building2 className="w-4 h-4" />
              {!SidebarOpen && "Properties"}
            </Link>

            <Link
              to="/tenants"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800/40 transition"
            >
              <Users className="w-4 h-4" />
              {!SidebarOpen && "Tenants"}
            </Link>

            <Link
              to="/payments"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800/40 transition"
            >
              <CreditCard className="w-4 h-4" />
              {!SidebarOpen && "Payments"}
            </Link>

            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800/40 transition"
            >
              <Settings className="w-4 h-4" />
              {!SidebarOpen && "Settings"}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 w-full rounded-s-4xl text-white bg-linear-to-br from-neutral-900 via-neutral-950 to-black overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
