import { TechnologiesCarousel } from "../../features/TechnologiesCarousel/TechnologiesCarousel";
import { TechnologyData } from "../../features/TechnologiesCarousel/TechnologyData";
import AdminData from "../../features/AdminData/AdminData";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <AdminData />
      <TechnologiesCarousel technologies={TechnologyData} />
    </div>
  );
};

export default HomePage;
