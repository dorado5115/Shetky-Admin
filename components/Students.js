import react from "react";
import styles from "../styles/Home.module.css";
import { Login, Sidebar, StudentsDashboard } from "../components";

export default function Students(){
    return(
        <>
            <div className={styles.content}>
                <Sidebar />
                <Students />
            </div>
        </>
    );
} 