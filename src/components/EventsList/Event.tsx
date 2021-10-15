import React, { useRef, useState } from "react";
import styles from "./Event.module.scss";

interface Props {
  index: number;
}

export const Event = ({ index }: Props) => {
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
      key={index}
      onBlur={(e) => handleBlur(e)}
      tabIndex={0}
      ref={liElement}
      className={styles.event}
    >
      <span className={styles["flex-4"]}>Custom {index}</span>
      <input
        className={styles["flex-4"]}
        disabled={!editMode}
        type="date"
        defaultValue="2019-05-22"
      />
      <input
        className={styles["flex-2"]}
        disabled={!editMode}
        type="time"
        defaultValue="09:00"
      />
      <input
        className={styles["flex-2"]}
        disabled={!editMode}
        type="time"
        defaultValue="12:00"
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
