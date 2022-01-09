import styles from "./Styles/SearchBar.module.css";

import searchIcon from "../Assets/icon-search.svg";
import axios from "../Helpers/axios";

const SearchBar = (props) => {
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
          const form = document.querySelector("form");
          form.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    };
    findUser();
  };

  return (
    <header className={styles.container}>
      <form className={styles["search-bar"]}>
        <img className={styles.icon} src={searchIcon} alt="" />
        <input
          className={styles.input}
          type="text"
          placeholder="Search GitHub username..."
        />
        <button onClick={searchUser} className={styles.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
