import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getTechnologies,
  fetchTechnologies,
} from "../../../redux/technologiesRedux";
import { TechnologyCard } from "../../features/TechnologyCard/TechnologyCard";
import styles from "./Technologies.module.scss";
import { ITechnologies } from "../../../interfaces/ITechnologies";

export const Technologies: React.FC = () => {
  const technologyData: ITechnologies[] = useSelector(getTechnologies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.technology}>
        <h1>Abilities</h1>
        {technologyData ? (
          technologyData.map((data: ITechnologies) => {
            return (
              <div key={data._id}>
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
