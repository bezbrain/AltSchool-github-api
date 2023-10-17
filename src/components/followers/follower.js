import React from "react";
import styles from "./followers.module.css";

const Follower = () => {
  return (
    <section className={styles.followers__section}>
      <p>Followers</p>
      <div>
        <div className={styles.followers__img__con}>
          <img
            src="https://avatars.githubusercontent.com/u/108897101?v=4"
            alt="Testing"
          />
        </div>
        <div>
          <h3>Name of Follower</h3>
          <a href="">https://github.com/sample</a>
        </div>
      </div>
    </section>
  );
};

export default Follower;
