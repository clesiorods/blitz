import ThemeSwitcher from "../ThemeSwither";
import "./style.css";
import ButtonLogout from "../ButtonLogout";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface NavPropos {
    children?: ReactNode[];
}

export default function TopBar(props: NavPropos) {

    return (
        <nav id="top_bar">

            <ul id="ul_module_sections" >

                {props.children?.map((el) => {
                    return (
                        <li>
                            {el}
                        </li>
                    );
                })}

            </ul>

            <div className="flex gap-2">
                <ThemeSwitcher />
                <div>Olá, Fulano de tal</div>
                <ButtonLogout />
            </div>

        </nav>
    );
}