import { NavLink } from "react-router-dom";
import { MainFrame } from "../../../components/MainFrame";
import PageHeader from "../../../components/PageHeader";


export default function UsersResume() {


    return (
        <MainFrame topBarOptions={
            <>
                <li><NavLink className="active" to={'/app/usuarios'} >Dashboard</NavLink></li>
            </>
        }>

            <PageHeader title="Usuários" subTitle="Resumo">
            </PageHeader>
        </MainFrame>
    )
}