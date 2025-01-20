import { ReactNode } from "react";
import Footer from "../Footer";
import SideBar from "../SideBar";
import TopBar from "../TopBar";
import { useSelector } from "react-redux";


type FrameProps = {
    children: React.ReactNode;
    topBarOptions?: ReactNode;
};


export function MainFrame(props: FrameProps) {


    const { color } = useSelector((state: any) => { return state.theme });


    return (
        <div data-theme={color}>
            <div className="flex h-screen w-screen overflow-hidden dark:bg-[#171b25]" >
                <SideBar />
                <div className="flex flex-col w-full">
                    <TopBar children={props.topBarOptions ? props.topBarOptions : <></>} />
                    <main className="p-[18px] w-full ml-0 overflow-y-scroll">
                        <div className="min-h-[calc(100vh-154px)]" >
                            {props.children}
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </div>
    );
}