import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTechnologies,
  getTechnologies,
} from "../../../redux/technologiesRedux";
import { TechnologyCard } from "../../features/TechnologyCard/TechnologyCard";

import styles from "./Abilities.module.scss";
import { ITechnologies } from "../../../interfaces/ITechnologies";

export const Abilities: React.FC = () => {
  const techData: ITechnologies[] = useSelector(getTechnologies);
  const validTechData = techData && techData.length > 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My Stack</h1>
      <div className={styles.technologies}>
        {validTechData ? (
          techData.map((data) => {
            return (
              <div key={data._id} className={styles.cards}>
                <TechnologyCard {...data} />
              </div>
            );
          })
        ) : (
          <div>
            <h1>No abilities</h1>
          </div>
        )}
      </div>
    </div>
  );
};
