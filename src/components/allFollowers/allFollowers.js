import React, { useEffect, useState } from "react";
import styles from "./allFollower.module.css";
import { Follower } from "../../components";
import { fetchAllFollowers } from "../../apis/githubApis";
import { Loading } from "../helpers";

const AllFollowers = ({ isLoading, setIsLoading }) => {
  const [allFollower, setAllFollowers] = useState([]);

  useEffect(() => {
    const awaitFollowers = async () => {
      setIsLoading(true);
      const getAllFollowers = await fetchAllFollowers();
      setIsLoading(false);
      setAllFollowers(getAllFollowers);
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
          ) : (
            allFollower.map((each) => <Follower {...each} key={each.id} />)
          )}
        </>
      </div>
    </section>
  );
};

export default AllFollowers;
