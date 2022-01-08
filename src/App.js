import { useState, useEffect } from "react";
import styles from "./App.module.css";

import MainInfo from "./Components/MainInfo";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";

import axios from "./Helpers/axios";

const App = () => {
  const [searchUser, setSearchUser] = useState({});
  useEffect(() => {
    const getData = async () => {
      const req = await axios.get("octocat");
      const userData = {
        picture: req.data.avatar_url,
        name: req.data.name,
        handle: req.data.login,
        dateJoined: req.data.created_at.slice(0, 10),
        bio: req.data.bio,
        repos: req.data.public_repos,
        followers: req.data.followers,
        following: req.data.following,
        location: req.data.location,
        website: req.data.blog,
        twitter: req.data.twitter_username,
        company: req.data.company,
      };
      console.log(userData);
      setSearchUser(userData);
    };
    getData();
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles["app-container"]}>
        <NavBar />
        <SearchBar />
        <MainInfo user={searchUser} />
      </div>
    </div>
  );
};

export default App;
