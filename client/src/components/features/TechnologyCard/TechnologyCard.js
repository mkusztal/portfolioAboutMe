import { useState } from "react";
import styles from "./TechnologyCard.module.scss";

export const TechnologyCard = ({ name, level }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${level}%`,
    };

    setStyle(newStyle);
  }, 0);
  return (
    <div className={styles.progress}>
      <p>{name}</p>
      <div className={styles.progress_done} style={style}>
        {level}%
      </div>
    </div>
  );
};
