import { Field } from "formik";
import styles from "./Event.module.scss";

import { EventProps } from "../../../../shared/types/Props";
import { useTypedDispatch } from "../../../../store/hooks";
import { remove } from "../../../../store/actionCreators/remove";

export const Event = ({ event, mode, toggleMode }: EventProps) => {
  const dispatch = useTypedDispatch();

  const inEditMode = mode === "edit";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (mode === "read") e.preventDefault();
    toggleMode();
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

      <button type={"submit"} onClick={handleClick}>
        <img
          className={styles.editImg}
          src={inEditMode ? "./img/tick.png" : "img/edit.png"}
          alt={inEditMode ? "Confirm" : "Edit"}
        />
      </button>

      <button onClick={() => dispatch(remove(event.date, event.id))}>
        <img className={styles.deleteImg} src="img/close.png" alt="Delete" />
      </button>
    </li>
  );
};
