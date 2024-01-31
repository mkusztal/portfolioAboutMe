import styles from "./AboutMe.module.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/userRedux";
import React, { useState } from "react";
import { IUser } from "../../../interfaces/IUser";

export const AboutMe: React.FC = () => {
  const [isOpenExperience, setIsOpenExperience] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);
  const user: IUser = useSelector(getUser);

  return (
    <div className={styles.root}>
      <img src='/images/me.png' alt='me' className={styles.portrait} />
      <div className={styles.rightColumn}>
        <div className={styles.text}>
          <h3>
            Hi! I'm<span>Maciej Kusztal</span>
          </h3>
          <p className={styles.description}>
            I'm Web Developer who is working on Software Engineer position.
            <br />I am an energetic and responsible person. Through my
            determination and commitment to the exact execution of the project,
            I believe that I am able to introduce positive energy to the team.
          </p>
        </div>
        {!user && (
          <div className={styles.info}>
            <p>SIGN IN AND OPEN FILES</p>
          </div>
        )}
      </div>

      <div id='content' className={styles.content}>
        <span>the most important experiences which affected me</span>
        <button onClick={() => setIsOpenExperience(!isOpenExperience)}>
          <i className='fa fa-angle-double-down'></i>
        </button>

        <div
          className={
            isOpenExperience ? styles.expandableOpen : styles.expandable
          }
          id='nav'
        >
          <ul>
            <li>
              <p>
                Involvement: I feel responsible for the tasks assigned to me.
              </p>
            </li>
            <li>
              <p>
                Enthusiasm: I am open to learning and working in a team, these
                two things combined with goals and a plan motivate me to act.
              </p>
            </li>
            <li>
              <p>
                Ambitious: I would like to become a Application Security
                Engineer, it’s a huge goal and has a long way, however, I know
                myself and one day I will do it.
              </p>
            </li>
          </ul>
        </div>

        <span>skills improve at my work</span>
        <button onClick={() => setIsOpenSkills(!isOpenSkills)}>
          <i className='fa fa-angle-double-down'></i>
        </button>

        <div
          className={isOpenSkills ? styles.expandableOpen : styles.expandable}
          id='nav2'
        >
          <ul>
            <li>
              <p>Calmness: I keep a cool head in stressful situations</p>
            </li>
            <li>
              <p>
                Communication: I am open to talk to everyone. I mean I can
                listen
              </p>
            </li>
            <li>
              <p>
                Responsible: The fact that I am responsible for something
                motivates me to act.
              </p>
            </li>
          </ul>
        </div>
      </div>
      {user && (
        <div className={styles.documents}>
          <ul className={styles.links}>
            <li>
              <button>
                <a
                  href='https://drive.google.com/file/d/1xvNm5y61KSuzVeCdCjyEYYoqQyTiBzO_/view?usp=drive_link'
                  className={styles.link}
                  rel='noreferrer'
                  target='_blank'
                >
                  CV
                </a>
              </button>
            </li>
            <li>
              <button>
                <a
                  href='https://drive.google.com/file/d/1IEYLQj5bdl4FP4CtPih-PRjZWTfnuO1h/view?usp=sharing'
                  className={styles.link}
                  rel='noreferrer'
                  target='_blank'
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
