import React from "react";
import styles from "./allRepo.module.css";
import { Link } from "react-router-dom";

const EachRepo = ({ name, html_url }) => {
  return (
    <summary className={styles.each__repo__con}>
      <h3>{name}</h3>
      <div className={styles.repo__btns__con}>
        <Link to={`${html_url}`} className={styles.view} target="_blank">
          View on Github
        </Link>
        <Link to={`/${name}`} className={styles.details}>
          Repo Details
        </Link>
      </div>
    </summary>
  );
};

export default EachRepo;
