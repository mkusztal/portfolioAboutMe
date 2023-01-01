import styles from "./SingleProjectCard.module.scss";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";

const SingleProjectCard = ({ name, description, technologies, linkGitHub }) => {
  return (
    <section className={styles.root}>
      <div className={styles.card}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.description}>{description}</div>
        <div className={styles.technologies}>
          <br></br> Used technologies: <span>{technologies}</span>
        </div>
        <div className={styles.links}>
          <Link to={"/projects"}>
            <Button name="Back" />
          </Link>
          <a href={linkGitHub} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectCard;
