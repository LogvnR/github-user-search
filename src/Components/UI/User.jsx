import styles from "../Styles/User.module.css";

const User = (props) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(props.user.dateJoined);
  const dateConvert = date.toLocaleDateString("en-US", options);
  const userDate = dateConvert.slice(4, 17);
  return (
    <div className={`${styles["user-container"]} ${props.className}`}>
      <p className={styles.name}>{props.user.name}</p>
      <p className={styles.handle}>{`@${props.user.handle}`}</p>
      <p className={styles["date-joined"]}>{`Joined ${userDate}`}</p>
    </div>
  );
};

export default User;
