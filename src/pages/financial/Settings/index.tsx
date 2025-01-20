import { NavLink } from "react-router-dom";
import { MainFrame } from "../../../components/MainFrame";



export default function Settings() {

    return (
        <MainFrame topBarOptions={
            <>
                <li><NavLink to={'/app/financeiro/dash-board'} >Dashboard</NavLink></li>
                <li><NavLink to={'/app/financeiro/relatorios'} >Relatórios</NavLink></li>
                <li><NavLink className="active" to={'/app/financeiro/configuracoes'} >Configurações</NavLink></li>
            </>}>
            aaaaaaa
        </MainFrame>
    )
}