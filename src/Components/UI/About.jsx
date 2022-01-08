import styles from "../Styles/About.module.css";

const About = (props) => {
  return (
    <div className={`${styles["about-container"]} ${props.className}`}>
      <div className={styles["about-type"]}>
        <p className={styles["about-title"]}>Repos</p>
        <p className={styles["about-amount"]}>8</p>
      </div>
      <div className={styles["about-type"]}>
        <p className={styles["about-title"]}>Followers</p>
        <p className={styles["about-amount"]}>3938</p>
      </div>
      <div className={styles["about-type"]}>
        <p className={styles["about-title"]}>Following</p>
        <p className={styles["about-amount"]}>9</p>
      </div>
    </div>
  );
};

export default About;
