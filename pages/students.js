import { Sidebar, StudentsDashboard } from "../components";
import styles from "../styles/Home.module.css";

export default function Students(){
    return(
        <>
            <div className={styles.content}>
                <Sidebar />
                <StudentsDashboard />
            </div>
        </>
    );
}