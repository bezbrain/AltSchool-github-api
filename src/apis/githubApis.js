import axios from "axios";

export const fetchMyProfile = async ({ setErrorMsg }) => {
  try {
    const { data } = await axios.get("https://api.github.com/users/bezbrain");
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    setErrorMsg(error.message);
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

export const fetchAllFollowers = async (setErrorMsg) => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/bezbrain/followers"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    setErrorMsg(error.message);
  }
};
