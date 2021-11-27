import { Field } from "formik";

import { useTypedDispatch } from "../../../../store/hooks";
import { remove } from "../../../../store/actionCreators/remove";

import { EventProps } from "../../../../shared/types/Props";

import { Axios } from "../../../../Axios";

import styles from "./Event.module.scss";

export const Event = ({ event, mode, toggleMode }: EventProps) => {
  const dispatch = useTypedDispatch();

  const inEditMode = mode === "edit";

  const submitButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!inEditMode) e.preventDefault();
    toggleMode();
  };

  const handleClick = async () => {
    try {
      await Axios.delete(`/events/delete/${event.id}`);

      dispatch(remove(event.date, event.id));
    } catch (err) {
      console.log(err);
    }
  };

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

      <button type="submit" onClick={submitButtonClick}>
        <img
          className={styles.editImg}
          src={inEditMode ? "./img/tick.png" : "img/edit.png"}
          alt={inEditMode ? "Confirm" : "Edit"}
        />
      </button>

      <button type="button" onClick={handleClick}>
        <img className={styles.deleteImg} src="img/close.png" alt="Delete" />
      </button>
    </li>
  );
};
