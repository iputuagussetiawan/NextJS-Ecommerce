
import {toast} from "react-toastify";
import Layout from "../../../components/admin/layout";
import styles from "../../../styles/dashboard.module.scss";
export default function dashboard() {
    return (
        <div>
            <Layout>
                <button onClick={()=>toast.error("Everything working Fine",{
                    position:"bottom-right"
                })}>Click to show toastify</button>
            </Layout>
        </div>
    );
}


