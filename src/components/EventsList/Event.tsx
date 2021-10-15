import React, { useRef, useState } from "react";
import { EventProps } from "../../shared/types/Props";
import styles from "./Event.module.scss";

export const Event = ({ event }: EventProps) => {
  const liElement = useRef<HTMLLIElement>(null);
  const [editMode, setEditMode] = useState(false);

  const toEditMode = () => setEditMode(true);
  const editEvent = () => setEditMode(false);
  const handleBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    if (
      editMode &&
      liElement.current &&
      !liElement.current.contains(e.relatedTarget)
    ) {
      editEvent();
    }
  };

  return (
    <li
      key={event.id}
      onBlur={(e) => handleBlur(e)}
      tabIndex={0}
      ref={liElement}
      className={styles.event}
    >
      <span className={styles["flex-4"]}>{event.name}</span>
      <input
        className={styles["flex-4"]}
        disabled={!editMode}
        type="date"
        defaultValue={event.date}
      />
      <input
        className={styles["flex-2"]}
        disabled={!editMode}
        type="time"
        defaultValue={event.start}
      />
      <input
        className={styles["flex-2"]}
        disabled={!editMode}
        type="time"
        defaultValue={event.end}
      />
      <img
        className={styles["flex-1"]}
        onClick={editMode ? editEvent : toEditMode}
        src={editMode ? "./img/tick.png" : "img/edit.png"}
        alt={editMode ? "Confirm" : "Edit"}
      />
      <div className={styles.delete}>
        <img src="img/close.png" alt="Delete" />
      </div>
    </li>
  );
};
