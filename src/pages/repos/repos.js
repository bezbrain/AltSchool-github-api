import React, { useState, useEffect } from "react";
import styles from "./repos.module.css";
import { AllFollowers, SummarySection, UserProfile } from "../../components";
import { fetchMyProfile } from "../../apis/githubApis";

const Repos = () => {
  const [myProfile, setMyProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const awaitProfile = async () => {
      setIsLoading(true);
      const getMyProfile = await fetchMyProfile();
      setIsLoading(false);
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
        loading={isLoading}
      />
      <section className={styles.user__and__followers}>
        <UserProfile myProfile={myProfile} loading={isLoading} />
        <AllFollowers isLoading={isLoading} setIsLoading={setIsLoading} />
      </section>
    </main>
  );
};

export default Repos;
