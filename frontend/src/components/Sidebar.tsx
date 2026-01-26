import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{
      width: 220,
      background: "#f9fafb",
      color: "#111827",
      padding: 20,
     borderRight: "1px solid #e5e7eb"

      // height: "100vh"
    }}>
      <h2 style={{ marginBottom: 30 }}>ReachInbox</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Link to="/dashboard" style={{ color: "#111827" }}>Dashboard</Link>
        <Link to="/dashboard/inbox" style={{ color: "#111827" }}>Inbox</Link>
        <Link to="/dashboard/compose" style={{ color: "#111827" }}>Compose</Link>
        <Link to="/dashboard/sent" style={{ color: "#111827" }}>Sent</Link>
      </nav>
    </aside>
  );
}
