
import { NavLink } from "react-router-dom"

export default function FinanceSubRoutes() {

    return (
        <>
            <li>
                <NavLink to={'/app/financeiro/'} >Dashboard</NavLink>
            </li>
            <li>
                <NavLink to={'/app/financeiro/relatorios'} >Relatórios</NavLink>
            </li>
            <li>
                <NavLink to={'/app/financeiro/configuracoes'} >Configurações</NavLink>
            </li>
        </>
    )
}