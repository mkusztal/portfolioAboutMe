import styles from "./ProjectCard.module.scss";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, shortDescription, _id }) => {
  return (
    <section className={styles.root}>
      <div className={styles.card}>
        <div className={styles.card_project}>
          <div className={styles.item}>
            <div className={styles.project_details}>
              <h3>
                <strong className={styles.title}>{name}</strong>{" "}
              </h3>
              <p>{shortDescription}</p>
            </div>
            <Link to={"/projects/" + _id}>
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
