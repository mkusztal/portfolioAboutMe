import React from "react";
import styles from "./Submit.module.scss";

type TProps = {
  type: "submit" | "button" | "reset";
  name: string;
  handleSubmit: () => void;
};

export const Submit: React.FC<TProps> = (props) => {
  const { type, name, handleSubmit } = props;
  return (
    <button type={type} onClick={handleSubmit} className={styles.submit}>
      {name}
    </button>
  );
};
