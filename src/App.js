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
      const res = await axios.get("octocat");
      const userData = {
        picture: res.data.avatar_url,
        name: res.data.name,
        handle: res.data.login,
        dateJoined: res.data.created_at.slice(0, 10),
        bio: res.data.bio,
        repos: res.data.public_repos,
        followers: res.data.followers,
        following: res.data.following,
        location: res.data.location,
        website: res.data.blog,
        twitter: res.data.twitter_username,
        company: res.data.company,
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
        <SearchBar setSearchUser={setSearchUser} />
        <MainInfo user={searchUser} />
      </div>
    </div>
  );
};

export default App;
