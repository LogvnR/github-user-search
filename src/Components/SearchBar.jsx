import styles from "./Styles/SearchBar.module.css";

import searchIcon from "../Assets/icon-search.svg";

const SearchBar = () => {
  return (
    <header className={styles.container}>
      <form className={styles["search-bar"]}>
        <img className={styles.icon} src={searchIcon} alt="" />
        <input
          className={styles.input}
          type="text"
          placeholder="Search GitHub username..."
        />
        <button className={styles.btn}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
