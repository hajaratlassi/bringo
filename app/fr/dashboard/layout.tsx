import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get("bringo_admin");

  if (adminCookie?.value !== "authenticated") {
    redirect("/fr/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="lg:pl-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}