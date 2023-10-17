import React, { useState, useEffect } from "react";
import styles from "./repos.module.css";
import {
  AllFollowers,
  Follower,
  SummarySection,
  UserProfile,
} from "../../components";
import { fetchMyProfile } from "../../apis/githubApis";

const Repos = () => {
  const [myProfile, setMyProfile] = useState({});

  useEffect(() => {
    const awaitProfile = async () => {
      const getMyProfile = await fetchMyProfile();
      setMyProfile(getMyProfile);
    };
    awaitProfile();
  }, []);

  return (
    <main className={styles.repos__page}>
      <SummarySection
        numberOfRepo={myProfile.public_repos}
        numberOfFollowers={myProfile.followers}
        numberOfFollowings={myProfile.following}
      />
      <section className={styles.user__and__followers}>
        <UserProfile myProfile={myProfile} />
        <AllFollowers />
      </section>
    </main>
  );
};

export default Repos;
