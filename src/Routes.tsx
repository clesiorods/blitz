import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/financial/DashBoard";
import Reports from "./pages/financial/Reports";
import Settings from "./pages/financial/Settings";
// import Teste from "./components/Teste";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/financeiro/dash-board" />} />

      <Route path="/app/financeiro/" element={<DashBoard />} />
      <Route path="/app/financeiro/dash-board" element={<DashBoard />} />
      <Route path="/app/financeiro/relatorios" element={<Reports />} />
      <Route path="/app/financeiro/configuracoes" element={<Settings />} />
      
    </Routes>
  );
}