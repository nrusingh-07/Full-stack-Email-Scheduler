import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import DashboardLayout from "./layouts/DashboardLayout";
import Compose from "./pages/Compose";
import Sent from "./pages/Sent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="compose" element={<Compose />} />
        <Route path="sent" element={<Sent />} />

      </Route>
    </Routes>
  );
}

export default App;
