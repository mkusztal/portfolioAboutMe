import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
const HomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.leftColumn}>
        <img src="/images/me.png" alt="me" />
      </div>
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

        <Link className={styles.button} to={'/aboutme'}>
          <Button variant="warning">Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
