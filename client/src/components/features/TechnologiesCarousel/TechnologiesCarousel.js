import styles from './TechnologiesCarousel.module.scss';
import { useState } from 'react';
import { TechnologyData } from './TechnologyData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const TechnologiesCarousel = ({ technologies }) => {
  const [current, setCurrent] = useState(0);
  const length = technologies.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(technologies) || technologies.length <= 0) {
    return null;
  }
  return (
    <section className={styles.carousel}>
      <div>
        <FaArrowAltCircleLeft
          className={styles.left_arrow}
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className={styles.right_arrow}
          onClick={nextSlide}
        />
        {TechnologyData.map((technology, index) => {
          return (
            <div
              className={
                index === current
                  ? styles.carousel__item_active
                  : styles.carousel__item
              }
              key={index}
            >
              <img
                src={technology.image}
                alt="technology"
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
