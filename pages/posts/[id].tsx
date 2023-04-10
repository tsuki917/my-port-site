import { getPostData, getAllPostIds } from "@/libs/posts";
import Link from "next/link";
import Layout from "@/component/Layout";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/component/codeBlock';
import styles from '../../styles/Home.module.css';

const Post = ({ postData }: any) => {
  const splitedData = postData.split('---');
  const splitedTitle = splitedData[1].split("'");
  return (
    <Layout>
      <div className={styles.rootList}>
        <Link legacyBehavior href='/'><a className={styles.rootListText}>home</a></Link>

        <Link legacyBehavior href='/blogs'><a className={styles.rootListText}>{'>'}ブログ</a></Link>
        <Link legacyBehavior href='/blogs'><a className={styles.rootListText}>{'>'}記事「{splitedTitle[1]}」</a></Link>
      </div>
      <div className={styles.article}>
        <ReactMarkdown
          children={splitedData[2]}
          components={{
            code: CodeBlock,
          }}
        />
      </div>
    </Layout>
  );
}

export default Post;

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}