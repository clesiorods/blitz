import { NavLink } from "react-router-dom";
import { MainFrame } from "../../../components/MainFrame";
import Card from "../../../components/Card";
import { Button, Modal, Table } from "antd";
import CardTitle from "../../../components/CardTitle";
// import * as echarts from 'echarts/core';
import ReactEcharts from "echarts-for-react";
import { useSelector } from "react-redux";
import PageHeader from "../../../components/PageHeader";
import IconNewDual from "../../../components/Icons/IconNewDual";
import { useState } from "react";
import { FormAddService } from "../../../components/forms/CreateService";


export default function ServicesResume() {

    const [modalAdd, setModalAdd] = useState(false);


    const color = useSelector((state: any) => { return state.theme.color });

    const dataSource = [
        {
            key: '1',
            cliente: 'Carlos P.',
            veiculo: 'Fiat uno',
            data: '01/01/2022 10:00',
        },
        {
            key: '2',
            cliente: 'Maria Cunha',
            veiculo: 'Grand Sienna',
            data: '04/01/2022 10:00',
        },
        {
            key: '3',
            cliente: 'Roberta Souza',
            veiculo: 'Honda Civic',
            data: '04/01/2022 10:00',
        },
        {
            key: '4',
            cliente: 'Maria Cunha',
            veiculo: 'Grand Sienna',
            data: '04/01/2022 10:00',
        },
        {
            key: '5',
            cliente: 'Ana Souza',
            veiculo: 'Honda biz',
            data: '04/01/2022 10:00',
        },
        {
            key: '6',
            cliente: 'Samuel Souza',
            veiculo: 'Chevrolet Onix',
            data: '04/01/2022 09:00',
        },
        {
            key: '7',
            cliente: 'Samuel Souza',
            veiculo: 'Chevrolet Onix',
            data: '04/01/2022 09:00',
        },
        {
            key: '8',
            cliente: 'Samuel Souza',
            veiculo: 'Chevrolet Onix',
            data: '04/01/2022 09:00',
        },
        {
            key: '9',
            cliente: 'Samuel Souza',
            veiculo: 'Chevrolet Onix',
            data: '04/01/2022 09:00',
        },
        {
            key: '10',
            cliente: 'Samuel Souza',
            veiculo: 'Chevrolet Onix',
            data: '04/01/2022 09:00',
        },
        {
            key: '11',
            cliente: 'Samuel Souza',
            veiculo: 'Chevrolet Onix',
            data: '04/01/2022 09:00',
        },
    ];

    const columns = [
        {
            title: 'Cliente',
            dataIndex: 'cliente',
            key: 'cliente',
        },
        {
            title: 'Veículo',
            dataIndex: 'veiculo',
            key: 'veiculo',
        },
        {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
        },
    ];


    const option = {
        color: ['#594ac9', '#37A2FF'],
        title: {
            // text: 'Stacked Line'
        },
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Iniciados', 'Finalizados'],
            right: 0,
            top: 12
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            splitNumber: 2

        },
        series: [
            {
                name: 'Iniciados',
                type: 'line',
                interval: 600,
                // stack: 'Total',
                showSymbol: false,
                smooth: true,
                data: [120, 132, 101, 534, 90, 230, 210],
                lineStyle: {
                    width: 3
                },
            },
            {
                name: 'Finalizados',
                type: 'line',
                interval: 600,
                // stack: 'Total',
                showSymbol: false,
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 310],
                lineStyle: {
                    width: 3
                },
            }
        ]
    };


    return (
        <>
            <Modal open={modalAdd} onCancel={() => { setModalAdd(false) }} footer={null} centered title={'Novo Atendimento'} width={1000}>
                <FormAddService setModalOpen={setModalAdd}/>
            </Modal>


            <MainFrame topBarOptions={
                <>
                    <li><NavLink className="active" to={'/app/atendimentos'} >Dashboard</NavLink></li>
                </>
            }>

                <PageHeader title="Atendimentos" subTitle="Resumo" loadData={() => { alert("teste") }}>
                    <Button className="bg-[#594ac9] flex items-center px-5 shadow-none w-full" onClick={() => { setModalAdd(true) }} type="primary">Novo <IconNewDual className="ml-2" /> </Button>
                </PageHeader>

                <div className="row">
                    <div className="col-md-12 col-lg-6 col-xxl-4">
                        <div className="row">
                            <div className="col-md-6">
                                <Card className="h-56 text-light" style={{ background: 'var(--primary-gradient)' }}>
                                    <h3>
                                        <span className="text-3xl font-medium" >24</span>
                                        <br />
                                        <span>Em andamento</span>
                                    </h3>
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <Card className="h-56" >
                                    <></>
                                </Card>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <Card className="h-56" >
                                    <CardTitle title="Atendimentos" style={{ marginBottom: -34 }} />
                                    <ReactEcharts option={option} style={{ height: '180px' }} theme={color === 'dark' ? 'dark' : 'light'} />
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 col-xxl-8">
                        <Card className="h-[468px]" >
                            <CardTitle title="Atendimentos" subTitle="Últimos data de movimentação" />
                            <Table
                                style={{ whiteSpace: 'nowrap' }}
                                className="mt-6"
                                pagination={{ pageSize: 6 }}
                                dataSource={dataSource}
                                columns={columns}
                                scroll={{ x: 'max-content' }}
                            />
                        </Card>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xl-12">
                        <Card className="max-h-[638px]" >
                            <CardTitle title="Todos atendimentos" />
                            <Table
                                style={{ whiteSpace: 'nowrap' }}
                                className="mt-8"
                                pagination={{ pageSize: 10 }}
                                dataSource={dataSource}
                                columns={columns}
                                scroll={{ x: 'max-content' }}
                            />
                        </Card>
                    </div>
                </div>

            </MainFrame>
        </>
    )
}