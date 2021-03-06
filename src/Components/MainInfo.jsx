import { motion } from "framer-motion";

import styles from "./Styles/MainInfo.module.css";
import About from "./UI/About";
import Social from "./UI/Social";
import User from "./UI/User";

const MainInfo = (props) => {
  const githubHandler = () => {
    window.open(`https://github.com/${props.user.handle}`);
  };
  return (
    <main className={styles.container}>
      <div className={styles["main-info"]}>
        <div className={styles["profile-container"]}>
          {!props.user.picture && <div className={styles["profile-pic"]} />}
          {props.user.picture && (
            <motion.img
              onClick={githubHandler}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles["profile-pic"]}
              src={props.user.picture}
              alt="Profile Picture"
            />
          )}
          <User className={styles.user} user={props.user} />
        </div>

        <p
          style={props.user.bio ? { opacity: 1 } : { opacity: 0.75 }}
          className={styles.description}
        >
          {props.user.bio ? props.user.bio : "This user has no bio"}
        </p>
        <About className={styles.about} user={props.user} />
        <Social className={styles.social} user={props.user} />
      </div>
    </main>
  );
};

export default MainInfo;
