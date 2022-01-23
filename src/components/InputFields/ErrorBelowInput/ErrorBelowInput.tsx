import React from "react";
import { useField } from "formik";
import classNames from "classnames";

import { EventInputProps } from "../../../shared/types/Props";

import styles from "./ErrorBelowInput.module.scss";

export const ErrorBelowInput = ({ name, label, ...props }: EventInputProps) => {
  const [field, meta] = useField({ name, ...props });

  const isError = meta.touched && meta.error;

  return (
    <div className={styles.inputField}>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={classNames({ [styles.error]: isError })}
      />
      {isError ? <em className={styles.error}>{meta.error}</em> : null}
    </div>
  );
};
