import styles from "./ProjectCard.module.scss";
import { Button } from "../../common/Button/Button";
import { Link } from "react-router-dom";
import React from "react";

type TProps = {
  name: string;
  shortDescription: string;
  _id: string;
};

export const ProjectCard: React.FC<TProps> = (props) => {
  const { name, shortDescription, _id } = props;
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
              <Button name='Read me' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
