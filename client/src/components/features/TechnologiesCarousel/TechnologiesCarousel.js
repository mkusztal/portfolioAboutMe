import styles from "./TechnologiesCarousel.module.scss";
// import { useEffect, useRef, useState } from "react";
import { TechnologyData } from "./TechnologyData";

export const TechnologiesCarousel = ({ technologies }) => {
  // const [current, setCurrent] = useState(2);
  // const timeoutRef = useRef(null);
  // const length = technologies.length;

  // // const nextSlide = () => {
  // //   setCurrent(current === length - 1 ? 0 : current + 1);
  // // };

  // // const prevSlide = () => {
  // //   setCurrent(current === 0 ? length - 1 : current - 1);
  // // };

  // // if (!Array.isArray(technologies) || technologies.length <= 0) {
  // //   return null;
  // // }
  // const resetTimeout = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // };

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(() => {
  //     setCurrent((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  //   }, [1500]);

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [current]);

  return (
    <section className={styles.root}>
      <div className={styles.marquee}>
        <div className={styles.marquee_inner}>
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
          </span>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
