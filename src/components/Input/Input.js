import React from "react";
import styles from "./Input.module.scss";
import Label from "../Label/Label";
const Input = ({ children, inputType, name, id, value, onChange, onBlur }) => (
  <>
    <Label>{children}</Label>
    <input
      type={inputType}
      className={styles.inp}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required
    />
  </>
);

export default Input;
