import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ name, shortDescription }) => {
  return (
    <section className={styles.root}>
      <div className="basket">
        <div className="basket-product">
          <div className="item">
            <div class="product-image">
              <img src="" alt="Placholder" className="product-frame" />
            </div>
            <div class="product-details">
              <h1>
                <strong>{name}</strong>{" "}
              </h1>
              <p>{shortDescription}</p>
            </div>
          </div>
          <button>Read more</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
