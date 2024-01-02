import styles from './Rodape.module.css'

export default function Rodape() {
  return (
    <footer className={styles.container}>
      <p className={styles.made}>Feito por Vitor Marquez</p>
      <p className={styles.email}>ovitormarquez@gmail.com</p>
    </footer>
  );
}
