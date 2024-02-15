import ThemeSwitcher from "../ThemeSwither";
import "./style.css";
import ButtonLogout from "../ButtonLogout";
import { ReactNode } from "react";
import { useThemeColor } from "../../context/theme.themeswitcher";

interface NavPropos {
    children?: ReactNode[];
}

export default function TopBar(props: NavPropos) {

    const {handleTheme} = useThemeColor();

    return (
        <nav id="top_bar">

            <ul id="ul_module_sections" >

                {props.children?.map((el, i) => {
                    return (
                        <li key={i}>
                            {el}
                        </li>
                    );
                })}

            </ul>

            <div className="flex gap-2" onClick={() => {handleTheme()}}>
                <ThemeSwitcher />
                <div className="text-nowrap" >Olá, Fulano de tal</div>
                <ButtonLogout />
            </div>

        </nav>
    );
}