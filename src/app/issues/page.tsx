import { store } from "@/lib/store";
import { IssuesList } from "@/components/IssuesList";

export const dynamic = "force-dynamic";

export const metadata = { title: "Issues · Nagrik" };

export default async function IssuesPage() {
  const issues = await store.listIssues();
  return <IssuesList issues={issues} />;
}
