import React from "react";
import { useField } from "formik";

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
        className={isError ? styles.error : undefined}
      />
      {isError ? <em className={styles.error}>{meta.error}</em> : null}
    </div>
  );
};
