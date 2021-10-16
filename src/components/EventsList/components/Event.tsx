import React from "react";
import { Field } from "formik";
import styles from "./Event.module.scss";

import { EventProps } from "../../../shared/types/Props";

export const Event = ({ event, mode, toggleMode }: EventProps) => {
  const disabled = mode === "edit" ? "" : " " + styles.disabled;

  return (
    <li className={styles.event + disabled}>
      <span className={styles["flex-4"]}>{event.name}</span>
      <Field name="eventDate" type="date" className={styles["flex-4"]} />
      <Field name="eventStart" type="time" className={styles["flex-2"]} />
      <Field name="eventEnd" type="time" className={styles["flex-2"]} />

      <button type={mode === "edit" ? "submit" : "button"} onClick={toggleMode}>
        <img
          className={styles.editImg}
          src={mode === "edit" ? "./img/tick.png" : "img/edit.png"}
          alt={mode === "edit" ? "Confirm" : "Edit"}
        />
      </button>

      <button>
        <img className={styles.deleteImg} src="img/close.png" alt="Delete" />
      </button>
    </li>
  );
};
