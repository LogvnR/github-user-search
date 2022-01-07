import styles from "./App.module.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles["app-container"]}>
        <NavBar />
        <SearchBar />
        <main>Main Info Section</main>
      </div>
    </div>
  );
}

export default App;
