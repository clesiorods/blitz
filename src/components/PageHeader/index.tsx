import { Button, Select } from "antd";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxSelectFilial } from "../../redux/FiliaisSlice";
import IconFilterDual from "../Icons/IconFilterDual";


interface IHeader {
    title: string;
    subTitle: string;
    children?: ReactNode;
    loadData?: () => void
}

export default function PageHeader({ title, subTitle, children, loadData }: IHeader) {

    const dispatch = useDispatch();

    const filiais = useSelector((state: any) => { return state.filiais.filiais });
    const selectedFiliais = useSelector((state: any) => { return state.filiais.selected });

    return (
        <header className="row justify-between px-0 pl-1 mt-[-14px] gap-3 mb-4 items-center max-sm:mb-8" >

            <div className="col-md-3">
                <h1 className="text-[1.3rem] font-semibold text-zinc-700 dark:text-zinc-100 dark:font-normal">{title}</h1>
                <h2 className="text-sm font-medium text-zinc-400 mt-[-5px]" >{subTitle}</h2>
            </div>

            <div className="col-md-4" >
                <div className="flex mobile_column gap-4 justify-end w-full">

                    <div className="flex gap-4" >
                        <div className="shadow_wrapper w-full">
                            <Select
                                defaultValue={selectedFiliais}
                                onChange={(e) => { dispatch(reduxSelectFilial(e)) }}
                                className="w-full"
                                style={{ border: 'none' }}
                                options={
                                    [
                                        { value: -1, label: 'Todas as Empresas' },
                                        ...(filiais?.map((f: any) => {
                                            return {
                                                value: f.id,
                                                label: f.nome_fantasia,
                                            }
                                        }))
                                    ]
                                }
                            />
                        </div>
                        <div className="shadow_wrapper">
                            <Button className=" flex items-center px-5 shadow-none secondary" style={{ textShadow: '0px 0px 8px #6b6b6b' }} onClick={loadData}>Filtrar <IconFilterDual className="ml-2" /> </Button>
                        </div>
                    </div>

                    {children}
                </div>
            </div>

        </header>
    );
}