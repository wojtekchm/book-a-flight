import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import style from "./Form.module.scss";

const Form = ({ children }) => (
  <div className={style.form}>
    <Label>e-mail:</Label>
    <Input />
    <Label>hasło:</Label>
    <Input />
    <Button>zaloguj</Button>
  </div>
);

export default Form;
