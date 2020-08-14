import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import style from "./LoginForm.module.scss";
import { Formik, Form, ErrorMessage } from "formik";

const LoginForm = () => (
  <div className={style.form}>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);

        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Input
            inputType="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          >
            E-mail
          </Input>
          <Input
            inputType="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          >
            Hasło
          </Input>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
