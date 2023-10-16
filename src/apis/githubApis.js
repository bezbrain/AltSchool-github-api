import axios from "axios";

export const fetchAllRepos = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/bezbrain/repos"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
