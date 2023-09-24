import styles from "../styles/pages/Home.module.scss"

// COMPONENTS
import Footer from "../components/Footer";
import Editor from "@/components/layouts/Editor";
import HowItWorks from "@/components/layouts/HowItWorks";

export default function Page(){
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Editor />
          <div className={styles.line} />
          <div className={styles.inner}>
            <HowItWorks />
            <div className={styles.footer}>
              <div className={styles.line} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
