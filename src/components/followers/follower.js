import React from "react";
import styles from "./followers.module.css";

const Follower = ({ avatar_url, login, html_url }) => {
  const firstThreeChar = login.slice(0, 3);
  // console.log(firstThreeChar);

  return (
    <section className={styles.followers__section}>
      <div className={styles.followers__img__con}>
        <img src={`${avatar_url}`} alt={`${firstThreeChar}`} />
      </div>
      <div>
        <h3>{login}</h3>
        <a href={`${html_url}`} target="_blank" rel="noreferrer">
          {html_url}
        </a>
      </div>
    </section>
  );
};

export default Follower;
