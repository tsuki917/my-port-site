import Layout from "@/component/Layout";
import styles from "../styles/Home.module.css"
import Link from "next/link";
const Question = () => {

    return (
        <Layout>
            <div className={styles.rootList}>
        <Link legacyBehavior href='/'><a className={styles.rootListText}>home</a></Link>

        <Link legacyBehavior href='/question'><a className={styles.rootListText}>{'>'}質問</a></Link>
        
      </div>
            <div className={styles.questionBoard}>
                <h2>質問への解答</h2>

            </div>
            <form method="post" action="https://newt-713228.form.newt.so/v1/jvyD3q6Ah">
                <div className={styles.input}>
                    <h2>お問い合わせ</h2>
                    <label htmlFor="name">name</label><br/>
                    <input name="name" id="name" /><br/>
                    <label htmlFor="email">email</label><br/>
                    <input name="email" id="email" type="email"/><br/>
                    <label htmlFor="question">question</label><br/>
                    <input name="question" id="question" /><br/>
                    <button type="submit">submit</button>
                </div>
            </form>
        </Layout>
    );
}

export default Question;