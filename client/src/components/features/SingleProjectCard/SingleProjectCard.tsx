import styles from "./SingleProjectCard.module.scss";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { ITechnologies } from "../../../interfaces/ITechnologies";
// import { ITechnologies } from "../../../interfaces/ITechnologies";

type IProps = {
  name: string;
  description: string;
  technologies: ITechnologies | any;
  linkGitHub: string;
};

export const SingleProjectCard: React.FC<IProps> = (props) => {
  const { name, description, technologies, linkGitHub } = props;
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
            <Button name='Back' />
          </Link>
          <a href={linkGitHub} target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
