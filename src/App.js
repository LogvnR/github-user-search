import styles from "./App.module.css";

import MainInfo from "./Components/MainInfo";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles["app-container"]}>
        <NavBar />
        <SearchBar />
        <MainInfo />
      </div>
    </div>
  );
}

export default App;
