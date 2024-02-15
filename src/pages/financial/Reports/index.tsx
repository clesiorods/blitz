import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import { MainFrame } from "../../../components/MainFrame";



export default function Reports() {

    return (
        <MainFrame topBarOptions={
            [
                <Link to={'/app/financeiro/'} >Dashboard</Link>,
                <Link to={'/app/financeiro/relatorios'} className="active" >Relatórios</Link>,
                <Link to={'/app/financeiro/configuracoes'} >Configurações</Link>,
            ]
        }>
            <div className="row">
                <div className="col-md-12 col-lg-6 col-xxl-4">
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="h-56" >
                                <h4 className="font-[500] text-3xl flex items-center h-[32px]" >
                                    <div className="subtitle text-lg mt-[7px] mr-1" >R$ </div>
                                    2.300,00
                                    <div className="ml-2 bedge bedge-success" ><span className="rotate-90" >{'>'}</span> 2,2%</div>
                                </h4>
                                <p className="subtitle text-sm" >Divisão de gastos do mês</p>
                                <div className="h-[calc(100%-55px)]">
                                </div>
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
                        <p>Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade. Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade.</p>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-lg-6 col-xxl-4">
                    <div className="row">
                        <div className="col-md-12">
                            <Card className="h-56" >
                                <h4 className="font-[500] text-3xl flex items-center h-[32px]" >
                                    <div className="subtitle text-lg mt-[7px] mr-1" >R$ </div>
                                    2.300,00
                                    <div className="ml-2 bedge bedge-success" ><span className="rotate-90" >{'>'}</span> 2,2%</div>
                                </h4>
                                <p className="subtitle text-sm" >Divisão de gastos do mês</p>
                                <div className="h-[calc(100%-55px)]">
                                </div>
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
                        <p>Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade. Segundp parágrafo, apenas para preenchimento do card, para verificação de responsividade.</p>
                    </Card>
                </div>
            </div>
        </MainFrame>
    )
}