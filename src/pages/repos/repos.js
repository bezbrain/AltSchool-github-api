import React from "react";
import styles from "./repos.module.css";
import { Follower, SummarySection, UserProfile } from "../../components";

const Repos = () => {
  return (
    <main className={styles.repos__page}>
      <SummarySection />
      <section className={styles.user__and__followers}>
        <UserProfile />
        <Follower />
      </section>
    </main>
  );
};

export default Repos;
