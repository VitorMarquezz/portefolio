import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <p className={styles.made}>Vitor Marquez</p>
                <p className={styles.email}>ovitormarquez@gmail.com</p>
            </footer>
        </div>
    )
}