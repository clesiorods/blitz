import SideBar from "../SideBar";
import TopBar from "../TopBar";


type FrameProps = {
    children: React.ReactNode;
};


export function MainFrame(props: FrameProps) {
    return (
        <>
            <div className="flex h-screen w-screen overflow-hidden" >
                <SideBar />
                <div className="flex flex-col w-full">
                    <TopBar />
                    {props.children}
                </div>
            </div>
        </>
    );
}