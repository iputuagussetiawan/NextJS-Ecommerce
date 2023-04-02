
import styles from "./styles.module.scss";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";

export default function Layout({children}) {
    const {expandSidebar}=useSelector((state)=>({...state}));
    const showSidebar=expandSidebar.expandSidebar
    console.log(showSidebar);
    return (
        <div className={styles.layout}>
            <Sidebar></Sidebar>
            <div
                style={{ marginLeft:`${showSidebar?"280px":"80px"}` }}
                className={styles.layout__main}>
                {children}
            </div>
        </div>
    );
}
