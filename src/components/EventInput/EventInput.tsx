import React from "react";
import { useField } from "formik";
import classNames from "classnames";

import { EventInputProps } from "../../shared/types/Props";

import styles from "./EventInput.module.scss";

export const EventInput = ({ name, label, ...props }: EventInputProps) => {
  const [field, meta] = useField({ name, ...props });

  const isError = meta.touched && meta.error;

  return (
    <div className={styles.inputField}>
      <label>{label}</label>
      <input
        {...field}
        type={props.type}
        className={classNames({ [styles.error]: isError })}
      />
      {isError ? <em className={styles.error}>{meta.error}</em> : null}
    </div>
  );
};
