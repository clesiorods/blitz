import "./style.css";
import Logo from "../../assets/logo_solutions.png";
import PinSideBar from "../PinSideBar";
import IconChatDual from "../Icons/IconChatDual";
import IconChackListDual from "../Icons/IconCheckListDual";
import IconPeopleDual from "../Icons/IconPeopleDual";
import IconSaleTagDual from "../Icons/IconSaleTagDual";
import IconWalletDual from "../Icons/IconWalletDual";
import { Link, NavLink } from "react-router-dom";


export default function SideBar() {

    return (
        <>
            <nav id="side_bar">
                <header className="border-b border-dashed border-[#352c5e]" >
                    <img alt="" src={Logo} className="w-[30px] ml-[2px]" />
                    <h1 className="text-xl pl-3 font-semibold cursor-default w-full overflow-hidden" >SOLUTIONS</h1>
                    <div className="icon_case">
                        <PinSideBar />
                    </div>
                </header>

                <h6 className="mt-4 ml-[32px] text-[10px] opacity-50 header_group">MÓDULOS</h6>

                <ul id="ul_modules">
                    <li className="">
                        <NavLink to={'/app/financeiro/'} className="">
                            <IconWalletDual className="nav_icon" />
                            <span className='nav_text'> Financeiro </span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to={'/'} className="">
                            <IconSaleTagDual className="nav_icon" />
                            <span className='nav_text'> Vendas </span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to={'/'} className="">
                            <IconPeopleDual className="nav_icon" />
                            <span className='nav_text'> CRM </span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to={'/'} className="">
                            <IconChackListDual className="nav_icon" />
                            <span className='nav_text'> Minhas Tarefas </span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to={'/'} className="">
                            <IconChatDual className="nav_icon" />
                            <span className='nav_text'> Chat </span>
                        </NavLink>
                    </li>
                    {/* {modules.map((module) => {
                        if (module.group == 'module') {
                            return (
                                <li key={module.id} className="">
                                    <NavLink to={module.path} className="">
                                        <IconChatDual className="nav_icon" />
                                        <span className='nav_text'> {module.description} </span>
                                    </NavLink>
                                </li>
                            );
                        }
                    })} */}
                </ul>

                <h6 className="mt-4 ml-[32px] text-[10px] opacity-50 header_group">APPS</h6>

                <ul id="ul_modules">
                    {/* <li className="">
                        <NavLink to={'/'} className="">
                            <IconCalcDual className="nav_icon" />
                            <span className='nav_text'> Calculadora </span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to={'/'} className="">
                            <IconCalendarDual className="nav_icon" />
                            <span className='nav_text'> Calendário </span>
                        </NavLink>
                    </li> */}
                </ul>

            </nav>
        </>
    );
}