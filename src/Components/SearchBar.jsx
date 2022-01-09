import { useState } from "react";
import styles from "./Styles/SearchBar.module.css";

import searchIcon from "../Assets/icon-search.svg";
import axios from "../Helpers/axios";

const SearchBar = (props) => {
  const [validUser, setValidUser] = useState("valid");

  const searchUser = (e) => {
    e.preventDefault();
    const user = document.querySelector("input").value;

    const findUser = async () => {
      await axios
        .get(user)
        .then((res) => {
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
          props.setSearchUser(userData);
          setValidUser(true);
          const form = document.querySelector("form");
          form.reset();
        })
        .catch((error) => {
          setValidUser(false);
          console.log(error);
        });
    };
    if (user === "") {
      setValidUser("null");
    } else {
      findUser();
    }
  };

  return (
    <header className={styles.container}>
      <form className={styles["search-bar"]}>
        <img className={styles.icon} src={searchIcon} alt="" />
        <div className={styles["input-container"]}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search GitHub username..."
          />
          {validUser === "null" && (
            <p className={styles.error}>Cannot Be Empty</p>
          )}
          {!validUser && <p className={styles.error}>No Results</p>}
        </div>
        <button onClick={searchUser} className={styles.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
