import { TechnologiesCarousel } from "../../features/TechnologiesCarousel/TechnologiesCarousel";
import { AdminData } from "../../features/AdminData/AdminData";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div>
      <AdminData />
      <TechnologiesCarousel />
    </div>
  );
};
