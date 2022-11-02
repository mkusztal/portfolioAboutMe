import { Link } from 'react-router-dom';
// import TechnologiesCarousel from '../../features/TechnologiesCarousel/TechnologiesCarousel';
// import { TechnologyData } from '../../features/TechnologiesCarousel/TechnologyData';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      {/* <div className={styles.descriptionMe}> */}
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

        <Link to={'/aboutme'}>
          <button className={styles.button}>Read Me</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
