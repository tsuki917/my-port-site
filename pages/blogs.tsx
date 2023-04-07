import Layout from "@/component/Layout";
import { getSortedPostsData } from '@/libs/posts'
import Link from "next/link";
import styles from './../styles/Home.module.css';
interface postData {
    title: string;
    id: string;
    date: string;
    description:string;
}
const blogs = ({ allPostsData }: any) => {
    return (
        <Layout>
            <h1 className={styles.blogTitle}>記事一覧</h1>
            <div className={styles.container}>
                {allPostsData.map(({ id, title, date, description }: postData) => (
                    <Link href={`/posts/${id}`} className={styles.item} key={id}>
                            <span className={styles.LinkTitle}>{title}</span>
                            <span className={styles.LinkDate}>投稿日 {date}</span>
                            <span className={styles.LinkDesc}>{description}</span>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default blogs;


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

