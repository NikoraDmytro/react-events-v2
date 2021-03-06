import { useTypedDispatch } from "../../../../store/hooks";
import { removeEvent } from "../../../../store/actionCreators/actionCreators";

import { EventProps } from "../../../../shared/types/Props";

import { TooltipErrorInput } from "../../../InputFields/TooltipErrorInput";

import styles from "./Event.module.scss";

export const Event = ({ event, mode, toggleMode }: EventProps) => {
  const dispatch = useTypedDispatch();

  const inEditMode = mode === "edit";

  const preventSubmitting = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (mode === "read") {
      e.preventDefault();
      toggleMode();
    }
  };

  const handleClick = () => {
    dispatch(removeEvent(event.id));
  };

  return (
    <li className={styles.event}>
      <span className={styles["flex-4"]}>{event.name}</span>

      <TooltipErrorInput
        name="eventDate"
        type="date"
        disabled={!inEditMode}
        className={styles["flex-4"]}
      />
      <TooltipErrorInput
        name="eventStart"
        type="time"
        disabled={!inEditMode}
        className={styles["flex-2"]}
      />
      <TooltipErrorInput
        name="eventEnd"
        type="time"
        disabled={!inEditMode}
        className={styles["flex-2"]}
      />

      <button type="submit" onClick={preventSubmitting}>
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
