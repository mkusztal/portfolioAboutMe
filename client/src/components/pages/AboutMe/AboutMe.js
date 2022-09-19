import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getInformations,
  fetchInformations,
} from '../../../redux/informationsRedux';
import {
  getTechnologies,
  fetchTechnologies,
} from '../../../redux/technologiesRedux';

import styles from './AboutMe.module.scss';
import AdminData from '../../features/AdminData';
import TechnologyCard from '../../features/TechnologyCard';

const AboutMe = () => {
  const adminData = useSelector(getInformations);
  const technologyData = useSelector(getTechnologies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInformations());
    dispatch(fetchTechnologies());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Row className="pb-5">
        {adminData.map((data) => (
          <div key={data._id}>
            <AdminData {...data} />
          </div>
        ))}
      </Row>
      <div className={styles.technology}>
        <h1>Abilities</h1>
        {technologyData.map((data) => (
          <div key={data._id}>
            <TechnologyCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
