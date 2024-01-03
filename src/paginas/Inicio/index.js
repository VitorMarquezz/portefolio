import styles from "./Inicio.module.css";
import github from "../../img/icons8-github.svg";
import linkedin from "../../img/icons8-linkedin.svg";
import imagem1 from "../../img/Frame20.png";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Inicio() {
  return (
    <main>
      <div className={styles.container}>
        <img
          className={styles.imagem1}
          alt="imagem1 para telas pequenas"
          src={imagem1}
        />
        <div className={styles.container__texto}>
          <h1 className={styles.container__titulo}>
            Olá, sou o <span style={{ fontWeight: "900" }}>Vitor Marquez.</span>{" "}
            Iniciando minha carreira como{" "}
            <span className={styles.desenvolvedor}>desenvolvedor</span>
            <span style={{ fontWeight: "800" }}> Frontend</span> :)
          </h1>
          <p className={styles.container__paragrafo}>
            Formado em Artes Visuais pela Universidade Federal de Uberlândia -
            UFU, decidi transicionar minha carreira para a área de tecnologia,
            mas precisamente como desevolver de software. Atualmente meu foco é
            evoluir e melhorar cada vez mais como um profissional de Frontend,
            utilizando a bibliteca React.
          </p>
          <div className={styles.sociais}>
            <Link
              to={"https://github.com/VitorMarquezz"}
              className={styles.sociais__link}
              target="_blank"
            >
              <img src={github} alt="icon github" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/vitor-marquez-004409200/"}
              className={styles.sociais__link}
              target="_blank"
            >
              <img src={linkedin} alt="icon github" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
