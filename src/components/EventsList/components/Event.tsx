import React from "react";
import { Field } from "formik";
import styles from "./Event.module.scss";

import { EventProps } from "../../../shared/types/Props";
import { useTypedDispatch } from "../../../store/hooks";
import { removeEvent } from "../../../store/reducers/eventsSlice";

export const Event = ({ event, mode, toggleMode, resetForm }: EventProps) => {
  const dispatch = useTypedDispatch();

  const inEditMode = mode === "edit";
  const disabled = inEditMode ? "" : styles.disabled;

  const handleBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    const parent = e.target.parentElement;
    const target = e.relatedTarget;
    if (inEditMode && parent && !parent.contains(target)) {
      resetForm();
      toggleMode();
    }
  };

  return (
    <li onBlur={handleBlur} className={styles.event + " " + disabled}>
      <span className={styles["flex-4"]}>{event.name}</span>

      <Field name="eventDate" type="date" className={styles["flex-4"]} />
      <Field name="eventStart" type="time" className={styles["flex-2"]} />
      <Field name="eventEnd" type="time" className={styles["flex-2"]} />

      <button type="submit">
        <img
          className={styles.editImg}
          src={inEditMode ? "./img/tick.png" : "img/edit.png"}
          alt={inEditMode ? "Confirm" : "Edit"}
        />
      </button>

      <button onClick={() => dispatch(removeEvent(event))}>
        <img className={styles.deleteImg} src="img/close.png" alt="Delete" />
      </button>
    </li>
  );
};
