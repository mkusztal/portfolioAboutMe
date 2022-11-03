import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Maciej Kusztal 2022</p>
      <div>
        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/sicArchitect"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maciej-kusztal-61b4a3201/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
