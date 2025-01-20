import { useSelector } from "react-redux";


export default function NotFound() {

    const ThemeColor = useSelector((state: any) => { return state.theme.color });

    return (
        <div className="flex h-screen w-screen justify-center items-center" data-theme={ThemeColor}>
            <h1>NÃO ENCONTRAMOS NADA POR AQUI. 404</h1>
        </div>
    )
}