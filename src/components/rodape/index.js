import styles from './Rodape.module.css'

export default function Rodape() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.made}>Feito por Vitor Marquez</p>
        <p className={styles.email}>ovitormarquez@gmail.com</p>
      </footer>
    </div>
  );
}
