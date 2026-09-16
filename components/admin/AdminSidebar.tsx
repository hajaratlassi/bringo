"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const items = [
  {
    label: "Dashboard",
    href: "/fr/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Audits",
    href: "/fr/audit",
    icon: Search,
  },
  {
    label: "Contacts",
    href: "/fr/dashboard/contacts",
    icon: Users,
  },
  {
    label: "Analytics",
    href: "/fr/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/fr/dashboard/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/fr/admin/login");
    router.refresh();
  }

  return (
    <>
      {/* Mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-[#17265f] p-3 text-white shadow-lg lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-slate-200 bg-[#17265f] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div>
            <div className="text-lg font-black tracking-[0.2em] text-white">
              BRINGO
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
              Admin Panel
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">
          {items.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href !== "/fr/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${
                  active
                    ? "bg-cyan-400 text-[#17265f]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User / Logout */}
        <div className="border-t border-white/10 p-4">
          <div className="mb-3 rounded-xl bg-white/5 px-4 py-3">
            <p className="text-xs text-white/50">Connecté en tant que</p>
            <p className="mt-1 truncate text-sm font-bold text-white">
              admin@bringo.fr
            </p>
          </div>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/10 hover:text-red-200"
          >
            <LogOut className="h-5 w-5" />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
}