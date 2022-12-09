import styles from "./AboutMe.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../../redux/userRedux";

const AboutMe = () => {
  const user = useSelector(getUser);

  return (
    <div className={styles.root}>
      <img src="/images/me.png" alt="me" />
      <div className={styles.rightColumn}>
        <div className={styles.text}>
          <h3>
            Hi! I'm <span>Maciej Kusztal</span>
          </h3>
          <p>
            I'm Junior Full Stack Web Developer who is looking for job as Junior
            Node.js Backend Developer.<br></br>
          </p>
        </div>
        {!user && (
          <div>
            <p>SIGN IN AND OPEN FILES</p>
          </div>
        )}
      </div>
      {user && (
        <div className={styles.documents}>
          <ul className={styles.links}>
            <li>
              <button>
                <a
                  href="https://drive.google.com/file/d/1_XkBho1NM-cvPjMfIHeEdIzVHN1IqkgC/view?usp=sharing"
                  className={styles.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  CV
                </a>
              </button>
            </li>
            <li>
              <button>
                <a
                  href="https://drive.google.com/file/d/1X_tqTJ8muXufRJHCo4MymYUR418xP0wT/view?usp=sharing"
                  className={styles.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Cover letter
                </a>
              </button>
            </li>
            <li>
              <button>
                <a
                  href="https://drive.google.com/file/d/1IEYLQj5bdl4FP4CtPih-PRjZWTfnuO1h/view?usp=sharing"
                  className={styles.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Certification
                </a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
