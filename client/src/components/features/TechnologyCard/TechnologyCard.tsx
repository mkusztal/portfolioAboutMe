import React, { useEffect, useState } from "react";
import styles from "./TechnologyCard.module.scss";
import { ITechnologyCard } from "../../../interfaces/ITechnologyCard";

interface Style {
  [key: string]: string | number;
}

export const TechnologyCard: React.FC<ITechnologyCard> = ({ name }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle: Style = {
        opacity: 1,
        width: `${50}%`,
      };

      setStyle(newStyle);
    }, 0);
  }, []);

  return (
    <div className={styles.progress}>
      <div className={styles.progress_done} style={style}>
        <p>{name}</p>
      </div>
    </div>
  );
};
