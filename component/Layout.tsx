import React, { ReactNode } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css';
interface layoutProps {
    children: React.ReactNode
}


const Layout = (prop: layoutProps) => {
    return (
        <main>
            <div className={styles.title}>
                <h2 className={styles.titleHtwo}>tsukiの寝床(仮)</h2>

                <div className={styles.menuContainer}>
                    <div className={styles.menu}>
                        <Link href="/" legacyBehavior>
                            <a className={styles.link}>プロフィール</a>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href="/blogs" legacyBehavior>
                            <a className={styles.link}>ブログ</a>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href="/question" legacyBehavior>
                            <a className={styles.link}>質問</a>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link href="/others" legacyBehavior>
                            <a className={styles.link}>その他</a>
                        </Link>
                    </div>
                </div>
            </div>


            <div>{prop.children}</div>
        </main>

    )
}

export default Layout;