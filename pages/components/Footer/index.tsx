import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <span className={styles.copyright}>
        &#169; Todos os direitos reservados, Ryan Lima
      </span>
    </footer>
  );
}

export { Footer };
