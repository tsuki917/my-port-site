import { getPostData, getAllPostIds } from "@/libs/posts";
import Link from "next/link";
import Layout from "@/component/Layout";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/component/codeBlock';
import styles from '../../styles/Home.module.css';

const Post = ({ postData }: any) => {
  const splitedData = postData.split('---');
  console.log(splitedData);
  return (
    <Layout>
      <div className={styles.container}>
        <ReactMarkdown
          children={splitedData[2]}
          components={{
            code: CodeBlock,
          }}
        />
      </div>
      <Link href="/blogs" className={styles.toBlogs}>to Blogs</Link>
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