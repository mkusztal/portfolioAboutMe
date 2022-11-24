import styles from './AboutMe.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTechnologies,
  getTechnologies,
} from '../../../redux/technologiesRedux';
import { TechnologyCard } from '../../features/TechnologyCard/TechnologyCard';

const AboutMe = () => {
  const techData = useSelector(getTechnologies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

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
        <div className={styles.technologies}>
          {techData.map((data) => (
            <div key={data._id}>
              <TechnologyCard {...data} />
            </div>
          ))}
        </div>

        <p className={styles.rethinking}>
          You can count years of experience, but not determination
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
