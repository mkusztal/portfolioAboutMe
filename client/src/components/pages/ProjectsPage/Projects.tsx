import styles from "./Projects.module.scss";
import { ProjectCard } from "../../features/ProjectCard/ProjectCard";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects, getProjects } from "../../../redux/projectsRedux";
import { IProjects } from "../../../interfaces/IProjects";

export const Projects: React.FC = () => {
  const projectData: IProjects[] = useSelector(getProjects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>My projects</h1>
      <div className={styles.technologies}>
        {projectData ? (
          projectData.map((data) => {
            return (
              <div key={data._id}>
                <ProjectCard {...data} />
              </div>
            );
          })
        ) : (
          <div>
            <h1>No cards</h1>
          </div>
        )}
      </div>
    </section>
  );
};
