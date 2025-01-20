import { NavLink } from "react-router-dom";
import { MainFrame } from "../../../components/MainFrame";
import PageHeader from "../../../components/PageHeader";



export default function CustomersResume() {


    return (
        <MainFrame topBarOptions={
            <>
                <li><NavLink className="active" to={'/app/clientes'} >Dashboard</NavLink></li>
            </>
        }>

            <PageHeader title="Clientes" subTitle="Resumo">
            </PageHeader>
        </MainFrame>
    )
}