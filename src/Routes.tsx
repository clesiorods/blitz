import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DashBoard from "./pages/financial/DashBoard";
import Reports from "./pages/financial/Reports";
import Settings from "./pages/financial/Settings";
import Login from "./pages/login";
import { useAuth } from "./context/AuthContext";
import UsersResume from "./pages/Users/Resume";
import NotFound from "./pages/notFound";
import { useSelector } from "react-redux";
import ServicesResume from "./pages/services/Resume";
import CustomersResume from "./pages/customer/Resume";
// import Teste from "./components/Teste";

export function Router() {

  const { authState } = useAuth();
  const modules = useSelector((state: any) => { return state.modules })

  function RequireAuth({ id, children }: { id?: number, children: JSX.Element }) {
    let location = useLocation();

    if ((!authState.usuario)) {
      return <Navigate to='/' state={{ from: location }} replace />
    }
    if ((id) && (!modules.map((m: any) => { return m.id }).includes(id))) {
      return <Navigate to='/404' state={{ from: location }} replace />
    }

    return children
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/login" />} />
      <Route path="/app/login" element={<Login />} />


      <Route path="/app/financeiro/" element={<RequireAuth id={3}><DashBoard /></RequireAuth>} />
      <Route path="/app/financeiro/dash-board" element={<RequireAuth id={3}><DashBoard /></RequireAuth>} />
      <Route path="/app/financeiro/relatorios" element={<RequireAuth id={3}><Reports /></RequireAuth>} />
      <Route path="/app/financeiro/configuracoes" element={<RequireAuth id={3}><Settings /></RequireAuth>} />


      <Route path="/app/clientes" element={<RequireAuth id={2} ><CustomersResume /></RequireAuth>} />


      <Route path="/app/usuarios" element={<RequireAuth id={1}><UsersResume /></RequireAuth>} />


      <Route path="/app/atendimentos" element={<RequireAuth id={4}><ServicesResume /></RequireAuth>} />


      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}