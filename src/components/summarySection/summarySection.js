import React from "react";
import styles from "./summarySect.module.css";
import { SummaryCard } from "../../components";
import { summaryData } from "../../data";

const SummarySection = () => {
  return (
    <section className={styles.summary__section}>
      {summaryData.map((each) => (
        <SummaryCard key={each.id} {...each} />
      ))}
    </section>
  );
};

export default SummarySection;
