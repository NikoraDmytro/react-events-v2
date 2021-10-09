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
    if (editMode && liElement.current && !liElement.current.contains(e.relatedTarget)) {
      editEvent();
    }
  }

  return (
    <li key={index} onBlur={(e) => handleBlur(e)} tabIndex={0} ref={liElement} className={styles.event}>
      <span>Custom {index}</span>
      <input disabled={!editMode} type="date" defaultValue="2019-05-22" />
      <input disabled={!editMode} type="time" defaultValue="09:00" />
      <input disabled={!editMode} type="time" defaultValue="12:00" />
      {editMode ?
        <img onClick={editEvent} src={"./img/tick.png"} alt="Confirm" /> :
        <img onClick={toEditMode} src="img/edit.png" alt="Edit" />
      }
      <div className={styles.delete}><img src="img/close.png" alt="Delete" /></div>
    </li>
  );
};
