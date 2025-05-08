import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import style from "./Sidebar.module.css";
import SideBarNav from "./SideBarNAv";
function SideBAar() {
    return ( 

        <>
            <div className={style.sidebar}>
            <Logo></Logo>
            <SideBarNav></SideBarNav>
          
        <Outlet></Outlet>
            <footer className={style.footer}>
            <p className={style.copyright}>
                &copy; copyright {new Date().getFullYear()} by WorldWise Int.
            </p>
            </footer>
            </div>
        </>
     );
}

export default SideBAar;