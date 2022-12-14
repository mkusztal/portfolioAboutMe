import styles from "./TechnologiesCarousel.module.scss";
// import { useEffect, useRef, useState } from "react";
import { TechnologyData } from "./TechnologyData";
import "font-awesome/css/font-awesome.min.css";

export const TechnologiesCarousel = () => {
  return (
    <section className={styles.root}>
      <div className={styles.marquee}>
        <div className={styles.marquee_inner}>
          {/* <span>
            {TechnologyData.map((technology, index) => {
              return (
                <div className={styles.orb} key={index}>
                  <img
                    src={technology.image}
                    alt="technology"
                    className={styles.image}
                  />
                </div>
              );
            })}
          </span>
          <span>
            {TechnologyData.map((technology, index) => {
              return (
                <div className={styles.orb} key={index}>
                  <img
                    src={technology.image}
                    alt="technology"
                    className={styles.image}
                  />
                </div>
              );
            })}
          </span> */}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
