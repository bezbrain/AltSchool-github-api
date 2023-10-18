import React, { useState, useEffect } from "react";
import styles from "./repos.module.css";
import {
  AllFollowers,
  AllRepos,
  SummarySection,
  UserProfile,
} from "../../components";
import { fetchMyProfile } from "../../apis/githubApis";

const RepoPage = () => {
  const [myProfile, setMyProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const awaitProfile = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const getMyProfile = await fetchMyProfile(setIsError);
        setMyProfile(getMyProfile);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // if (isError === "Network Error") {
        //   setIsError(true);
        // }
      }
    };
    awaitProfile();
  }, []);

  return (
    <main className={styles.repos__page}>
      <p>{isError}</p>
      <SummarySection
        loading={isLoading}
        numberOfFollowers={myProfile?.followers}
        numberOfRepo={myProfile?.public_repos}
        numberOfFollowings={myProfile?.following}
      />
      <section className={styles.user__and__followers}>
        <UserProfile myProfile={myProfile} loading={isLoading} />
        <AllFollowers
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
          isError={isError}
        />
      </section>
      <AllRepos isLoading={isLoading} setIsLoading={setIsLoading} />
    </main>
  );
};

export default RepoPage;
