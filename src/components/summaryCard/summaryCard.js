import React from "react";
import styles from "./summary.module.css";
import { Loading } from "../helpers";

const SummaryCard = ({ avatar, number, about, loading }) => {
  return (
    <div className={styles.summary__card}>
      <div className={styles.icon__con}>
        <p>{avatar}</p>
      </div>

      <div className={styles.card__about}>
        {loading ? (
          <Loading loadingStyle={styles.loading__width__height} />
        ) : (
          <h2>{number}</h2>
        )}
        <p>{about}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
