import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <>
        <div className="geist-font container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
        <ToastContainer />
        </>
    );
};

export default MainLayout;