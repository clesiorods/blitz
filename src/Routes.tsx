import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
// import Teste from "./components/Teste";

export function Router() {
  return (
    <Routes>
      <Route path="/app/dash-board" element={<DashBoard />} />
      <Route path="/" element={<Navigate to="/app/dash-board" />} />
      {/*<Route path="/crm" element={<Crm />} />
      <Route path="/financeiro" element={<Finance />} />
      <Route path="/clientes" element={<Customers />} />
      <Route path="/kanban" element={<Kanban/>} />
      <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/teste" element={<Teste />} /> */}
    </Routes>
  );
}