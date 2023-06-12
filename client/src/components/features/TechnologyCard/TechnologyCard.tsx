import React, { useEffect, useState } from "react";
import styles from "./TechnologyCard.module.scss";

interface ITechnologyCard {
  name: string;
}

interface Style {
  [key: string]: string | number;
}

const TechnologyCard: React.FC<ITechnologyCard> = ({ name }) => {
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

export default TechnologyCard;
