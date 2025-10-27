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
  const [SidebarOpen, SetSidebarOpen] = useState(false);

  const toggleSidebar = () => SetSidebarOpen(!SidebarOpen);

  return (
    <div
      className="flex h-screen w-screen
    text-[#ffffff] dark:text-[#fff9cb] bg-[linear-gradient(to_bottom_left,#237287,#28375c)] dark:bg-[linear-gradient(to_bottom_left,#0a2228,#0c101b)]"
    >
      <aside
        className={`relative transition-all duration-6npm run dev00 ease-in-out truncate ${
          SidebarOpen ? "w-20" : "w-60"
        } p-5 `}
      >
        <div className="absolute inset-0 bg-linear-to-trpointer-events-none" />
        <div className="relative z-10">
          <div className="text-lg font-semibold mb-6 tracking-wide">
            {!SidebarOpen ? "Dashboard Logo" : "Logo"}
          </div>
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-3 p-2 mb-1.5 rounded-lg hover:bg-neutral-800/40 transition"
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

      <main
        className=" flex-1 p-6 w-full rounded-s-4xl overflow-y-auto shadow-xl
   text-[#121212] dark:text-[#fff9cb] bg-[#ffffff] dark:bg-[linear-gradient(to_bottom_left,#0a2228,#0c101b)]"
      >
        <Outlet />
      </main>
    </div>
  );
}
