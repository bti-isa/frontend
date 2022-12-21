import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return (
    <>
        <Navbar />
        <main>
        <Outlet />
        </main>
    </> );
}
 
export default Layout;