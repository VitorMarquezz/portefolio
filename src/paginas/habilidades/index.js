import Footer from "../../components/footer";
import styles from "./Habilidades.module.css"
import vectorJS from '../../img/vector-js.png'
import vectorHTML from '../../img/vector-html.png'
import vectorCSS from "../../img/vector-css.png";
import vectorREACTjs from "../../img/vector-reactjs.png";

export default function Habilidades() {
    return (
      <main className={styles.container}>
        <div className={styles.images}>
          <img className={`${styles.vector} ${styles.vectorHtml}`} src={vectorHTML} alt="vector javascript" />
          <img className={`${styles.vector} ${styles.vectorCss}`} src={vectorCSS} alt="vector javascript" />
          <img className={`${styles.vector} ${styles.vectorJs}`} src={vectorJS} alt="vector javascript" />
          <img className={`${styles.vector} ${styles.vectorReact}`} src={vectorREACTjs} alt="vector javascript" />
        </div>
        <Footer />
      </main>
    );
}