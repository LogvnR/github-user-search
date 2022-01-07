import styles from "./App.module.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <header>Search Bar</header>
      <main>Main Info Section</main>
    </div>
  );
}

export default App;
