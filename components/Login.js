import styles from "./styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login(){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className={styles.logo}
                />
                <p>
                    Your best friend for the college!
                </p>
                <p className={styles.login}>
                    <Link href="/api/auth/login">
                        <a>Login</a>
                    </Link>
                </p>
            </div>
        </div>
    );
}