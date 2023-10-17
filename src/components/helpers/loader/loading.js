import React from "react";
import styles from "./loading.module.css";

const Loading = ({ loadingStyle, loadingCon }) => {
  return (
    <div className={`${styles.loading__animation} ${loadingCon}`}>
      <div className={`${styles.dot} ${loadingStyle}`}></div>
      <div className={`${styles.dot} ${loadingStyle}`}></div>
      <div className={`${styles.dot} ${loadingStyle}`}></div>
    </div>
  );
};

export default Loading;
