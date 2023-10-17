import axios from "axios";

export const fetchMyProfile = async () => {
  try {
    const { data } = await axios.get("https://api.github.com/users/bezbrain");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllRepos = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/bezbrain/repos"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllFollowers = async () => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/bezbrain/followers"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
