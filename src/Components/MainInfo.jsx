import styles from "./Styles/MainInfo.module.css";
import About from "./UI/About";
import Social from "./UI/Social";
import User from "./UI/User";

const MainInfo = (props) => {
  return (
    <main className={styles.container}>
      <div className={styles["main-info"]}>
        <div className={styles["profile-container"]}>
          {!props.user.picture && <div className={styles["profile-pic"]} />}
          {props.user.picture && (
            <img
              className={styles["profile-pic"]}
              src={props.user.picture}
              alt="Profile Picture"
            />
          )}
          <User user={props.user} />
        </div>

        <p className={styles.description}>
          {props.user.bio ? props.user.bio : "This user has no bio"}
        </p>
        <About user={props.user} />
        <Social user={props.user} />
      </div>
    </main>
  );
};

export default MainInfo;
