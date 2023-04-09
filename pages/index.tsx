import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../component/Layout'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })


const Home: any = () => {
    return (
        <Layout>
            <div className={styles.rootList}>
                <Link legacyBehavior href='/'><a className={styles.rootListText}>home</a></Link>
                
            </div>
            <div className={styles.profBoard}>
                <div className={styles.img}>
                    <Image src="/images/profile.jpg" alt="profImage" width={140} height={140} className={styles.borderCircle} />
                </div>
                <div className={styles.profContent}>
                    <h2 className={styles.name}>tsuki</h2>
                    <p>
                        名工大在学のフロントエンド勉強中の学生です。
                        主にjavascript周りを中心に学んでいます。<br />このサイトもnext.jsとReactのチュートリアルとして作成しています。
                    </p>
                    <h4>趣味</h4>
                    <p>ラノベ読んだり、アニメ見たりが趣味です。</p>
                    githubアカウントはコチラ<a href='https://github.com/tsuki917' target='_blank'> https://github.com/tsuki917</a>

                </div>
            </div>
        </Layout>
    );
}

export default Home;


