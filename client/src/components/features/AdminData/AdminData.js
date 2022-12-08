import styles from './AdminData.module.scss';
import { Link } from 'react-router-dom';

const AdminData = () => {
  return (
    <div className={styles.root}>
      {/* <img src="/images/background.png" alt="background"  className={styles.background}/> */}
      <img src="/images/me.png" alt="me" className={styles.portrait}/>
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
export default AdminData;
