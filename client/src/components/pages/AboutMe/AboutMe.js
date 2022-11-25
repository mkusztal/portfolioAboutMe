import styles from './AboutMe.module.scss';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className={styles.root}>
      <img src="/images/me.png" alt="me" />
      <div className={styles.rightColumn}>
        <div className={styles.text}>
          <h3>
            Hi! I'm <span>Maciej Kusztal</span>
          </h3>
          <p>
            I'm Junior Full Stack Web Developer who is looking for Junior
            Backend Developer...
          </p>
        </div>
        <div className={styles.documents}>
          <ul className={styles.links}>
            <li>
              <button>
                <Link className={styles.link}>CV</Link>
              </button>
            </li>
            <li>
              <button>
                <Link className={styles.link}>Cover letter</Link>
              </button>
            </li>
            <li>
              <button>
                <Link className={styles.link}>Certification</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
