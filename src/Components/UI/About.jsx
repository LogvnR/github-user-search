import styles from "../Styles/About.module.css";

const About = (props) => {
  return (
    <div className={`${styles["about-container"]} ${props.className}`}>
      <div className={styles["about-type"]}>
        <p className={styles["about-title"]}>Repos</p>
        <p className={styles["about-amount"]}>{props.user.repos}</p>
      </div>
      <div className={styles["about-type"]}>
        <p className={styles["about-title"]}>Followers</p>
        <p className={styles["about-amount"]}>{props.user.followers}</p>
      </div>
      <div className={styles["about-type"]}>
        <p className={styles["about-title"]}>Following</p>
        <p className={styles["about-amount"]}>{props.user.following}</p>
      </div>
    </div>
  );
};

export default About;
