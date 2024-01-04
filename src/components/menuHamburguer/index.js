import { useState } from "react";
import styles from "./MenuHamburguer.module.css";

export default function MenuHamburguer() {
  const [isOpen, setIsOpen] = useState(true);

  const setOpenedState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div
        className={`${isOpen ? styles.menuButton : styles.menuButtonOpen}`}
        onClick={() => setOpenedState()}
      >
        <div
          className={`${
            isOpen ? styles.menuButtonBurger : styles.menuButtonBurgerOpen
          }`}
        ></div>
      </div>
      <div className={`${isOpen ? styles.menuColuna : styles.menuColunaOpen}`}>
        <div className={styles.lista}>
          <ul className={styles.listaItens}>
            <li>ajuda</li>
            <li>por favor</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
