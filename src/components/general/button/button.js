import React from "react";
// import styles from "./button.module.css";

const Button = ({ btnContent, btnStyles }) => {
  return (
    <div className={`${btnStyles}`}>
      <button>{btnContent}</button>
    </div>
  );
};

export default Button;
