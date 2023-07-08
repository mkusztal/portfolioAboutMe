import { TechnologiesCarousel } from "../../features/TechnologiesCarousel/TechnologiesCarousel";
import { AdminData } from "../../features/AdminData/AdminData";
import styles from "./HomePage.module.scss";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.root}>
      <AdminData />
      <TechnologiesCarousel />
    </div>
  );
};
