import styles from "./Styles/NavBar.module.css";
import moon from "../Assets/icon-moon.svg";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>devfinder</h1>
      <div className={styles["theme-container"]}>
        <p className={styles.title}>dark</p>
        <img className={styles.img} src={moon} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
