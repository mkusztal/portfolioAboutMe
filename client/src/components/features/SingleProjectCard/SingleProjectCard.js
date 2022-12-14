import styles from "./SingleProjectCard.module.scss";

const SingleProjectCard = ({ name, description, technologies, linkGitHub }) => {
  return (
    <section className={styles.root}>
      <div className={styles.card}>
        <div className={styles.card_project}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.description}>{description}</div>
          <div className={styles.technologies}>{technologies}</div>
          <div className={styles.links}>{linkGitHub}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleProjectCard;
