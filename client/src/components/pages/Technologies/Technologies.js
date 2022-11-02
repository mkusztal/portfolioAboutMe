import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getTechnologies,
  fetchTechnologies,
} from '../../../redux/technologiesRedux';
import TechnologyCard from '../../features/TechnologyCard/TechnologyCard';

import styles from './Technologies.module.scss';

const Technologies = () => {
  const technologyData = useSelector(getTechnologies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  return (
    <div>
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

export default Technologies;
