import { Outlet } from "react-router";
import NavBar from "../components/shared/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="geist-font container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;