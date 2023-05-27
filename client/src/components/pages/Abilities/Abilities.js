import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTechnologies,
  getTechnologies,
} from "../../../redux/technologiesRedux";
import { TechnologyCard } from "../../features/TechnologyCard/TechnologyCard";

import styles from "./Abilities.module.scss";

const Abilities = () => {
  const techData = useSelector(getTechnologies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My Stack</h1>
      <div className={styles.technologies}>
        {techData.map((data) => (
          <div key={data._id} className={styles.cards}>
            <TechnologyCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
