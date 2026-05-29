import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Pages/Footeer/Footer";
import { Suspense } from "react";
const MainLayout = () => {
    return (
        <>
        <div className="geist-font container mx-auto">
            <Suspense fallback={<span className="loading loading-spinner loading-xl block mx-auto mt-20"></span>}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </Suspense>
        </div>
        <ToastContainer />
        </>
    );
};

export default MainLayout;