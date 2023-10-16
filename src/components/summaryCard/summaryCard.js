import React from "react";
import styles from "./summary.module.css";

const SummaryCard = ({ avatar, number, about }) => {
  return (
    <div className={styles.summary__card}>
      <div className={styles.icon__con}>
        <p>{avatar}</p>
      </div>

      <div className={styles.card__about}>
        <h2>{number}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
