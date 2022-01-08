import styles from './styles.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <h1>Ryan Lima</h1>
      <div className={styles.networks}>
        <Link href="https://github.com/ryansldev" passHref={true}>
          <a target="_blank">
            <FaGithub size={20} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/ryansldev/" passHref={true}>
          <a target="_blank">
            <FaLinkedin size={20} />
          </a>
        </Link>
        <Link href="https://twitter.com/ryansldev" passHref={true}>
          <a target="_blank">
            <FaTwitter size={20} />
          </a>
        </Link>
      </div>
      <span className={styles.copyright}>
        &#169; Todos os direitos reservados, Ryan Lima
      </span>
    </footer>
  )
}

export default Footer;