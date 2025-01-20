import "./style.css";
import Logo from "../../assets/logo_icon_white.svg";
import LogoLabel from "../../assets/logo_label_white.svg";
import PinSideBar from "../PinSideBar";
import IconPeopleDual from "../Icons/IconPeopleDual";
import IconWalletDual from "../Icons/IconWalletDual";
import { NavLink } from "react-router-dom";
import IconCalcDual from "../Icons/IconCalcDual";
import IconCalendarDual from "../Icons/IconCalendarDual";
import IconClientesDual from "../Icons/IconClientesDual";
import { useSelector } from "react-redux";
import IconTicketDual from "../Icons/IconTicketDual";


export default function SideBar() {

    const modules = useSelector((state: any) => { return state.modules });
    const idsModulesIds = (modules.map((m: any) => m.id));

    return (
        <>
            <nav id="side_bar">
                <header className="" id="navbar_header">
                    <img alt="" src={Logo} className="w-[28px] ml-[4px]" />

                    <img alt="" style={{ transition: '1s all' }} src={LogoLabel} className="h-[20px] min-h-5 max-h-5 ml-[-4px] font-semibold overflow-hidden" />

                    <div className="icon_case">
                        <PinSideBar />
                    </div>
                </header>
                <hr className="mx-4 border-[#252937]" />

                <h6 className="mt-5 ml-[32px] text-[10px] opacity-50 header_group">MÓDULOS</h6>

                <ul id="ul_modules">

                    {idsModulesIds.includes(4) && <li className="">
                        <NavLink to={'/app/atendimentos'} className="">
                            <IconTicketDual className="nav_icon" />
                            <span className='nav_text'> Atendimentos </span>
                        </NavLink>
                    </li>}

                    {idsModulesIds.includes(3) &&
                        <li className="">
                            <NavLink to={'/app/financeiro/'} className="">
                                <IconWalletDual className="nav_icon" />
                                <span className='nav_text'> Financeiro </span>
                            </NavLink>
                        </li>}

                    {idsModulesIds.includes(2) && <li className="">
                        <NavLink to={'/app/clientes'} className="">
                            <IconClientesDual className="nav_icon" />
                            <span className='nav_text'> Clientes </span>
                        </NavLink>
                    </li>}

                    {idsModulesIds.includes(1) && <li className="">
                        <NavLink to={'/app/usuarios'} className="">
                            <IconPeopleDual className="nav_icon" />
                            <span className='nav_text'> Usuários </span>
                        </NavLink>
                    </li>}


                    {/* <li className="">
                        <NavLink to={'/app/cadastros'} className="">
                            <IconChackListDual className="nav_icon" />
                            <span className='nav_text'> Cadastros </span>
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
                            <IconChatDual className="nav_icon" />
                            <span className='nav_text'> Chat </span>
                        </NavLink>
                    </li> */}
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

                <h6 className="mt-5 ml-[32px] text-[10px] opacity-50 header_group">APPS</h6>

                <ul id="ul_modules">
                    <li className="">
                        <NavLink to={'/app/calculadora'} className="">
                            <IconCalcDual className="nav_icon" />
                            <span className='nav_text'> Calculadora </span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to={'/app/calendario'} className="">
                            <IconCalendarDual className="nav_icon" />
                            <span className='nav_text'> Calendário </span>
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </>
    );
}