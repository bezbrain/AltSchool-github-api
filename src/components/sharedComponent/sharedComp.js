import React from "react";
import styles from "./shared.module.css";

const SharedComp = () => {
  return (
    <header className={styles.sharedLayout__head}>
      <section className={styles.head__text}>
        <div className={styles.email__abbreviate}>
          <p>OL</p>
        </div>

        <p>
          <span>Welcome,</span> <span>OLA@GMAIL.COM</span>
        </p>
      </section>
    </header>
  );
};

export default SharedComp;
