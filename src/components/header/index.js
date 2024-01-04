import styles from "./Header.module.css";
import logo from "../../img/logo1.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  

  return (
    <header className={styles.cabecalho}>
      <div className={styles.logo}>
        <Link
          className={`${styles.imgNome} ${styles.linkNavegacao} ${
            useLocation().pathname === "/" ? styles.linkDestacado : ""
          }`}
          to={"/"}
        >
          <img src={logo} className={styles.imagem} alt="logo" />
          <p className={styles.nome}>Vitor Marquez</p>
        </Link>
      </div>
      <nav className={styles.navegacao}>
        <Link
          className={`${styles.inicio} ${styles.linkNavegacao} ${
            useLocation().pathname === "/" ? styles.linkDestacado : ""
          } `}
          to={"/"}
        >
          início
        </Link>
        <Link
          className={`${styles.linkNavegacao} ${
            useLocation().pathname === "/habilidades"
              ? styles.linkDestacado
              : ""
          } `}
          to={"/habilidades"}
        >
          Habilidades
        </Link>
        <Link
          className={`${styles.linkNavegacao} ${
            useLocation().pathname === "/projetos" ? styles.linkDestacado : ""
          } `}
          to={"/projetos"}
        >
          Projetos
        </Link>
      </nav>
    </header>
  );
}
