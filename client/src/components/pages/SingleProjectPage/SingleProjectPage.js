import SingleProjectCard from "../../features/SingleProjectCard/SingleProjectCard";
import styles from "./SingleProjectPage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectById, fetchProjects } from "../../../redux/projectsRedux";

const SingleProjectPage = () => {
  const { projectId } = useParams();
  const projectData = useSelector((state) => getProjectById(state, projectId));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <section className={styles.root}>
      <SingleProjectCard
        name={projectData.name}
        description={projectData.description}
        technologies={projectData.technologies}
        linkGitHub={projectData.linkGitHub}
      />
    </section>
  );
};

export default SingleProjectPage;
