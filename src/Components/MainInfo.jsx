import styles from "./Styles/MainInfo.module.css";

const MainInfo = () => {
  return (
    <main className={styles.container}>
      <div className={styles["main-info"]}>
        <div className={styles["profile-container"]}>
          {/* <img src="" alt="" /> */}
          <div className={styles["profile-pic"]} />
          <div className={styles["user-container"]}>
            <p className={styles.name}>The Octocat</p>
            <p className={styles.handle}>@octocat</p>
            <p className={styles["date-joined"]}>Joined 25 Jan 2011</p>
          </div>
        </div>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className={styles["about-container"]}>
          <div className={styles["about-type"]}>
            <p className={styles["about-title"]}>repos</p>
            <p className={styles["about-amount"]}>8</p>
          </div>
          <div className={styles["about-type"]}>
            <p className={styles["about-title"]}>repos</p>
            <p className={styles["about-amount"]}>8</p>
          </div>
          <div className={styles["about-type"]}>
            <p className={styles["about-title"]}>repos</p>
            <p className={styles["about-amount"]}>8</p>
          </div>
        </div>
        <div className={styles["social-container"]}>
          <div className={styles["social-type"]}>
            <img src="" alt="" />
            <p className={styles.location}>San Francisco</p>
          </div>
          <div className={styles["social-type"]}>
            <img src="" alt="" />
            <p className={styles.link}>h ttps://github.blog</p>
          </div>
          <div className={styles["social-type"]}>
            <img src="" alt="" />
            <p className={styles.twitter}>Not Available</p>
          </div>
          <div className={styles["social-type"]}>
            <img src="" alt="" />
            <p className={styles.work}>@github</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainInfo;
