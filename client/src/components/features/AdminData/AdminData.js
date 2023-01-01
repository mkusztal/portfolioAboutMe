import styles from "./AdminData.module.scss";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";

const AdminData = () => {
  return (
    <div className={styles.root}>
      <img src="/images/me.png" alt="me" className={styles.portrait} />
      <div className={styles.rightColumn}>
        <div className={styles.text}>
          <h3>
            Hi! I'm <span>Maciej Kusztal</span>
          </h3>
          <p>
            I'm Junior Full Stack Web Developer who is looking for Junior
            Backend Developer...
          </p>
        </div>

        <Link to={"/aboutme"}>
          <Button name="Read me" />
        </Link>
      </div>
    </div>
  );
};
export default AdminData;
