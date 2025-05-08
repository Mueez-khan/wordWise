import {NavLink } from "react-router-dom";
import style from  "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
    return ( 
        <>


        <nav className={style.nav}>
                <Logo></Logo>
            <ul>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/price">Price</NavLink>
                </li>
                <li>
                    <NavLink to="/app">Layout</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={style.ctaLink}>Login</NavLink>
                </li>
            </ul>
        </nav>


        </>
     );
}

export default PageNav;