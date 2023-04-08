
import styles from "./styles.module.scss";
import Sidebar from "./sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideDialog,showDialog  } from "../../../store/DialogSlice";
import DialogModal from "../../dialogModal";

export default function Layout({children}) {
    const {expandSidebar}=useSelector((state)=>({...state}));
    const showSidebar=expandSidebar.expandSidebar

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(hideDialog());
    }, []);
    console.log(showSidebar);
    return (
        <div className={styles.layout}>
             <DialogModal />
            <Sidebar></Sidebar>
            <div
                style={{ marginLeft:`${showSidebar?"280px":"80px"}` }}
                className={styles.layout__main}>
                {children}
            </div>
        </div>
    );
}
