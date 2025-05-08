// import PageNav from "../components/PageNav";
import style from "./AppLayout.module.css";
import Layout from "./AppLayout";
function AppLayout() {
    return ( 

        <>
        <div className={style.app}>
        
    {/* <SideBAar></SideBAar> */}
    <Layout></Layout>
   
    </div>
        </>
     );
}

export default AppLayout;