import { TechnologiesCarousel } from "../../features/TechnologiesCarousel/TechnologiesCarousel";
import { TechnologyData } from "../../features/TechnologiesCarousel/TechnologyData";
import AdminData from "../../features/AdminData/AdminData";

const HomePage = () => {
  return (
    <div>
      <AdminData />
      <TechnologiesCarousel technologies={TechnologyData} />
    </div>
  );
};

export default HomePage;
