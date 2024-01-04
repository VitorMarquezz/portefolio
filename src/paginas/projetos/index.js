import { Link } from "react-router-dom";
import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <div className={styles.container}>
      <div className={styles.projetos}>
        <Link
          to={"https://calculadora-azure-ten.vercel.app/"}
          className={styles.sociais__link}
          target="_blank"
        >
          <div className={styles.projeto1}></div>
        </Link>

        <p className={styles.projetoLegenda}>Calculadora React/js</p>
      </div>
    </div>
  );
}
