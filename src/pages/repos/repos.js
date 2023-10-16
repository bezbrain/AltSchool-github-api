import React from "react";
import styles from "./repos.module.css";
import { SummarySection } from "../../components";

const Repos = () => {
  return (
    <main className={styles.repos__page}>
      <SummarySection />
    </main>
  );
};

export default Repos;
