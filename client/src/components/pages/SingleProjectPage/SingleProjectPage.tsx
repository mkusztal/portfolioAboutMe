import { SingleProjectCard } from "../../features/SingleProjectCard/SingleProjectCard";
import styles from "./SingleProjectPage.module.scss";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectById, fetchProjects } from "../../../redux/projectsRedux";
import { IProjects } from "../../../interfaces/IProjects";

export const SingleProjectPage: React.FC = () => {
  const { projectId }: any = useParams();
  const projectData: IProjects = useSelector((state) =>
    getProjectById(state, projectId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <section className={styles.root}>
      {projectData && (
        <SingleProjectCard
          name={projectData.name}
          description={projectData.description}
          technologies={projectData.technologies}
          linkGitHub={projectData.linkGitHub}
        />
      )}
    </section>
  );
};
