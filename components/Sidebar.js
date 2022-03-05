import Image from "next/image"
import Link from "next/link"
import styles from "./styles/Sidebar.module.css"
import * as md from "react-icons/md";
import { useRouter } from "next/router";

export default function Sidebar(){
    const router = useRouter();

    return(
        <div className={styles.container}>
            <Image className={styles.img} src="/logo.svg" alt="logo" width={110} height={110}/>
            <div className={router.pathname == '/students' ? styles.contentPath : styles.content}>
                <md.MdPeople/>
                <Link href="/students">
                    <a>Students</a>
                </Link>
            </div>
            <div className={router.pathname == '/chefs' ? styles.contentPath : styles.content}>
                <md.MdFastfood/>
                <Link href="/chefs">
                    <a>Chefs</a>
                </Link>
            </div>
            <footer>
                <a href="/api/auth/logout">Log Out</a>
            </footer>
        </div>
    )
};

