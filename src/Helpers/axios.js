import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://api.github.com/users/",
});

export default mainApi;
