import { useEffect, useState } from "react";
import styles from "./TechnologyCard.module.scss";

export const TechnologyCard = ({ name }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${50}%`,
      };

      setStyle(newStyle);
    }, 0);
  });

  return (
    <div className={styles.progress}>
      <div className={styles.progress_done} style={style}>
        <p>{name}</p>
      </div>
    </div>
  );
};
