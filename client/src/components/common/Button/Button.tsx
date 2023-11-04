import React from "react";
import styles from "./Button.module.scss";

type TProps = {
  name: string;
};

export const Button: React.FC<TProps> = (props) => {
  const { name } = props;
  return <button className={styles.button}>{name}</button>;
};
