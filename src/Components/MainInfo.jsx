import styles from "./Styles/MainInfo.module.css";

import loactionIcon from "../Assets/icon-location.svg";
import websiteIcon from "../Assets/icon-website.svg";
import twitterIcon from "../Assets/icon-twitter.svg";
import companyIcon from "../Assets/icon-company.svg";

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
        <div className={styles["social-container"]}>
          <div className={styles["social-type"]}>
            <div className={styles["icon-container"]}>
              <img src={loactionIcon} alt="Location" />
            </div>
            <p className={styles.type}>San Francisco</p>
          </div>
          <div className={styles["social-type"]}>
            <div className={styles["icon-container"]}>
              <img src={websiteIcon} alt="Website" />
            </div>
            <p className={styles.type}>h ttps://github.blog</p>
          </div>
          <div className={styles["social-type"]}>
            <div className={styles["icon-container"]}>
              <img src={twitterIcon} alt="Twitter" />
            </div>
            <p className={styles.type}>Not Available</p>
          </div>
          <div className={styles["social-type"]}>
            <div className={styles["icon-container"]}>
              <img src={companyIcon} alt="Company" />
            </div>
            <p className={styles.type}>@github</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainInfo;
