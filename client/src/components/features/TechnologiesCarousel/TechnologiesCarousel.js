import styles from "./TechnologiesCarousel.module.scss";
import { TechnologyData } from "./TechnologyData";

export const TechnologiesCarousel = ({ technologies }) => {
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
