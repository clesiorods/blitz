import Footer from "../Footer";
import SideBar from "../SideBar";
import TopBar from "../TopBar";


type FrameProps = {
    children: React.ReactNode;
};


export function MainFrame(props: FrameProps) {
    return (
        <div className="flex h-screen w-screen overflow-hidden" >
            <SideBar />
            <div className="flex flex-col w-full">
                <TopBar />
                <main className="p-[18px] w-full ml-0 overflow-y-auto">
                    <div className="min-h-[calc(100vh-154px)]" >
                        {props.children}
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}