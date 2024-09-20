import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";


const Main = () => {
    return (
        <div>
             <Navbar />
             <Outlet />
             <Footer />
        </div>
    );
};

export default Main;