import styles from "./Styles/MainInfo.module.css";
import About from "./UI/About";
import Social from "./UI/Social";
import User from "./UI/User";

const MainInfo = () => {
  return (
    <main className={styles.container}>
      <div className={styles["main-info"]}>
        <div className={styles["profile-container"]}>
          <img className={styles["profile-pic"]} src="" alt="" />
          {/* <div className={styles["profile-pic"]} /> */}
          <User />
        </div>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <About />
        <Social />
      </div>
    </main>
  );
};

export default MainInfo;
