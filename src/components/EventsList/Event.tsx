import React from "react";
import styles from "./Events.module.scss";

interface Props {
  index: number;
}

export const Event = ({ index }: Props) => {
  return (
    <li className={styles.event}>
      <span>Custom {index}</span>
      <input type="date" defaultValue="2019-05-22" />
      <input type="time" defaultValue="09:00" />
      <input type="time" defaultValue="12:00" />
      <img src="img/edit.png" alt="Edit" />
      <img src="img/close.png" alt="Delete" />
    </li>
  );
};
