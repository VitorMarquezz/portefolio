import styles from "./Header.module.css";
import logo from "../../img/logo1.png";
import { Link, useLocation } from "react-router-dom";
import imagem2 from "../../img/material-symbols_menu.png";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} className={styles.imagem} alt="logo" />
        </Link>
        <Link
          className={`${styles.linkNavegacao} ${
            useLocation().pathname === "/" ? styles.linkDestacado : ""
          } `}
          to={"/"}
        >
          Vitor Marquez
        </Link>
      </div>
      <div className={styles.menu}>
        <img className={styles.imagem2} alt="imagem2 menu" src={imagem2} />
      </div>
      <nav className={styles.navegacao}>
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
