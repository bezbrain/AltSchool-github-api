import React, { useEffect, useState } from "react";
import styles from "./allFollower.module.css";
import { Follower } from "../../components";
import { fetchAllFollowers } from "../../apis/githubApis";

const AllFollowers = () => {
  const [allFollower, setAllFollowers] = useState([]);

  useEffect(() => {
    const awaitFollowers = async () => {
      const getAllFollowers = await fetchAllFollowers();
      setAllFollowers(getAllFollowers);
    };
    awaitFollowers();
  }, []);

  return (
    <section className={styles.followers__tag}>
      <p>Followers</p>
      <div className={styles.all__followers}>
        {allFollower.map((each) => (
          <Follower {...each} key={each.id} />
        ))}
      </div>
    </section>
  );
};

export default AllFollowers;
