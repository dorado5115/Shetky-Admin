import { Sidebar, ChefsDashboard } from "../components";
import styles from "../styles/Home.module.css";

export default function Chefs(){
    return(
        <>
            <div className={styles.content}>
                <Sidebar />
                <ChefsDashboard />
            </div>
        </>
    );
}