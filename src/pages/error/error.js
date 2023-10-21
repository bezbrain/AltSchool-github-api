import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error__page}>
      <img
        className={styles.pulse}
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.2.49781342.1685882618&semt=ais"
        alt="error-page"
      />
      <h3>Oops! Page does not exist</h3>
      <Link to="/">
        <button className={styles.error__btn}>Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
