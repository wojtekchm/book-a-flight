import React from "react";
import styles from "./Button.module.scss";

// const Button = (props) => <button className={styles.btn}>{props.title}</button>;

const Button = ({ children }) => (
  <button className={styles.btn}>{children}</button>
);

export default Button;
