import styles from "./Projects.module.scss";
import ProjectCard from "../../features/ProjectCard/ProjectCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects, getProjects } from "../../../redux/projectsRedux";
import { useParams } from "react-router-dom";

const Projects = () => {
  const projectData = useSelector(getProjects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>My projects</h1>
      <div className={styles.technologies}>
        {projectData.map((data) => (
          <div key={data._id}>
            <ProjectCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
