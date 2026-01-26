import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#ffffff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 24, color: "#000" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
