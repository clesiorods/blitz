import ThemeSwitcher from "../ThemeSwither";
import "./style.css";
import ButtonLogout from "../ButtonLogout";
import { Link } from "react-router-dom";

export default function TopBar() {


    return (
        <nav id="top_bar">
            <ul id="ul_module_sections" >
                <li> <Link to={'/app/financeiro/'} className="active" >Dashboard</Link></li>
                <li> <Link to={'/app/financeiro/relatorios'} >Relatórios</Link></li>
                <li> <Link to={'/app/financeiro/configuracoes'} >Configurações</Link></li>
            </ul>

            <div className="flex gap-2">
                <ThemeSwitcher />
                <div>Olá, Fulano de tal</div>
                <ButtonLogout />
            </div>
        </nav>
    );
}