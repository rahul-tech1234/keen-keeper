import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Pages/Footeer/Footer";
const MainLayout = () => {
    return (
        <>
        <div className="geist-font container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        <ToastContainer />
        </>
    );
};

export default MainLayout;