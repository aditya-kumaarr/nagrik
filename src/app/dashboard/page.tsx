import { store } from "@/lib/store";
import { Dashboard } from "@/components/Dashboard";

export const dynamic = "force-dynamic";

export const metadata = { title: "Dashboard · Nagrik" };

export default async function DashboardPage() {
  const [stats, users] = await Promise.all([store.stats(), store.listUsers()]);
  return <Dashboard stats={stats} users={users} />;
}
