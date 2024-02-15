import { Link } from "react-router-dom";
import { MainFrame } from "../../../components/MainFrame";



export default function Settings() {

    return (
        <MainFrame topBarOptions={
            [
                <Link to={'/app/financeiro/'}>Dashboard</Link>,
                <Link to={'/app/financeiro/relatorios'} >Relatórios</Link>,
                <Link to={'/app/financeiro/configuracoes'} className="active" >Configurações</Link>,
            ]
        }>
            aaaaaaa
        </MainFrame>
    )
}