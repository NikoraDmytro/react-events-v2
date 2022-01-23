import React from "react";
import { useField } from "formik";
import classNames from "classnames";

import { InputFieldProps } from "../../../shared/types/Props";

import styles from "./TooltipErrorInput.module.scss";

export const TooltipErrorInput = ({ name, ...props }: InputFieldProps) => {
  const [field, meta] = useField({ name, ...props });

  const isError = meta.touched && meta.error;

  return (
    <div className={styles.inputField}>
      <input
        {...field}
        {...props}
        className={classNames({ [styles.error]: isError })}
      />
      {isError ? <span className={styles.error}>{meta.error}</span> : null}
    </div>
  );
};
