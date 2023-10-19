import React, { useEffect, useState } from "react";
import styles from "./allFollower.module.css";
import { Follower } from "../../components";
import { fetchAllFollowers } from "../../apis/githubApis";
import { Loading } from "../helpers";

const AllFollowers = ({ isLoading, setIsLoading, setIsError }) => {
  const [allFollower, setAllFollowers] = useState([]);

  useEffect(() => {
    const awaitFollowers = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const getAllFollowers = await fetchAllFollowers(setIsError);
        setAllFollowers(getAllFollowers);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // if (error.message === "Network Error") {
        //   setIsError(true);
        // }
      }
    };
    awaitFollowers();
  }, []);

  return (
    <section className={styles.followers__tag}>
      <p>Followers</p>
      <div className={styles.all__followers}>
        <>
          {isLoading ? (
            <Loading
              loadingStyle={styles.loading__width__height}
              loadingCon={styles.loading__con}
            />
          ) : allFollower?.length > 0 ? (
            allFollower.map((each) => <Follower {...each} key={each.id} />)
          ) : (
            <h2 className={styles.loading__con}>No followers found</h2>
          )}
        </>
      </div>
    </section>
  );
};

export default AllFollowers;
