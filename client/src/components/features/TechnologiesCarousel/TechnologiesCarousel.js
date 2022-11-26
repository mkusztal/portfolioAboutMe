import styles from './TechnologiesCarousel.module.scss';
import { useEffect, useRef, useState } from 'react';
import { TechnologyData } from './TechnologyData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const TechnologiesCarousel = ({ technologies }) => {
  const [current, setCurrent] = useState(2);
  const timeoutRef = useRef(null);
  const length = technologies.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(technologies) || technologies.length <= 0) {
  //   return null;
  // }
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    }, [1500]);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const automaticSlider = () => {};

  return (
    <section className={styles.container}>
      <div className={styles.carousel}>
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
