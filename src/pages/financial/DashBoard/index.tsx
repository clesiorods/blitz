
import { NavLink } from "react-router-dom"
import Card from "../../../components/Card"
import { MainFrame } from "../../../components/MainFrame"
import PageHeader from "../../../components/PageHeader"
// import ReactEcharts from "echarts-for-react";
// import * as echarts from 'echarts/core';


export default function DashBoard() {


    return (
        <MainFrame topBarOptions={
            <>
                <li><NavLink className="active" to={'/app/financeiro/dash-board'} >Dashboard</NavLink></li>
                <li><NavLink to={'/app/financeiro/relatorios'} >Relatórios</NavLink></li>
                <li><NavLink to={'/app/financeiro/configuracoes'} >Configurações</NavLink></li>
            </>
        }>

            <PageHeader title="Financeiro" subTitle="Resumo">
            </PageHeader>

            <div className="row">
                <div className="col-md-12 col-lg-6 col-xxl-4">
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="h-56" >
                                {/* <ReactEcharts option={option} style={{ height: '180px' }} /> */}
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Card className="h-56" >
                                Olá, Fulano
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="h-56" >
                                <></>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xxl-8">
                    <Card className="h-[468px]" >
                        <p>Neste parágrafo terá algum alista de contas, ou uma lista de saldos baseados na situação financeira dos mês.</p>
                        <br />
                        <p>Segundo parágrafo, apenas para preenchimento do card, para verificação de responsividade. Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade.</p>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-xl-6">
                    <Card className="h-[468px]" >
                    </Card>
                </div>
                <div className="col-md-12 col-xl-6">
                    <Card className="h-[468px]" >
                    </Card>
                </div>
            </div>
        </MainFrame>
    )
}