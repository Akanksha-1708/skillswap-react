// {/* <Outlet /> is a placeholder used by React Router to render nested route components inside a parent layout. */}

import {Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function MainLayout(){
    return(
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}
export default MainLayout;