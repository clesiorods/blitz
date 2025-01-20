import ThemeSwitcher from "../ThemeSwitcher";
import "./style.css";
import ButtonLogout from "../ButtonLogout";
import { ReactNode } from "react";
import { useAuth } from "../../context/AuthContext";

interface NavProps {
    children?: ReactNode;
}

export default function TopBar(props: NavProps) {

    const {authState} = useAuth();
    
    return (
        <nav id="top_bar" className="hidden_scroll">
            <ul id="ul_module_sections" >
                {props.children}
            </ul>

            <div className="flex gap-2 m_hidden">
                <ThemeSwitcher />
                <div className="text-nowrap mx-3" >Olá, {authState.usuario?.nome.split(' ')[0]}</div>
                <ButtonLogout className="" />
            </div>

        </nav>
    );
}