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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  console.log("tech", techData);
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My Stack</h1>
      <div className={styles.technologies}>
        {techData ? (
          techData.map((data) => {
            return (
              <div key={data._id} className={styles.cards}>
                <TechnologyCard {...data} />
              </div>
            );
          })
        ) : (
          <div>
            <h1>No cards</h1>
          </div>
        )}
      </div>
    </div>
  );
};
