import React from "react";
import { Field } from "formik";
import styles from "./Event.module.scss";

import { EventProps } from "../../../shared/types/Props";
import { useTypedDispatch } from "../../../store/hooks";
import { removeEvent } from "../../../store/reducers/eventsSlice";

export const Event = ({ event, mode, toggleMode }: EventProps) => {
  const dispatch = useTypedDispatch();

  const inEditMode = mode === "edit";

  return (
    <li className={styles.event}>
      <span className={styles["flex-4"]}>{event.name}</span>

      <Field
        name="eventDate"
        type="date"
        disabled={!inEditMode}
        className={styles["flex-4"]}
      />
      <Field
        name="eventStart"
        type="time"
        disabled={!inEditMode}
        className={styles["flex-2"]}
      />
      <Field
        name="eventEnd"
        type="time"
        disabled={!inEditMode}
        className={styles["flex-2"]}
      />

      <button
        type={"submit"}
        onClick={(e) => {
          if (mode === "read") e.preventDefault();
          toggleMode();
        }}
      >
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
