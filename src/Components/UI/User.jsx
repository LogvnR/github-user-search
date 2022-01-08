import styles from "../Styles/User.module.css";

const User = (props) => {
  return (
    <div className={`${styles["user-container"]} ${props.className}`}>
      <p className={styles.name}>The Octocat</p>
      <p className={styles.handle}>@octocat</p>
      <p className={styles["date-joined"]}>Joined 25 Jan 2011</p>
    </div>
  );
};

export default User;
