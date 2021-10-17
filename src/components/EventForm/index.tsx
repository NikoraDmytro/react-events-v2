import React from "react";
import { Formik, Form } from "formik";
import { eventFormValidation } from "../../utils/validation/eventFormValidation";
import { EventInput } from "./EventInputs/EventInput";
import { useTypedDispatch } from "../../store/hooks";
import { addEvent } from "../../store/reducers/eventsSlice";
import {
  getInitialValues,
  parseFormValues,
} from "./../../utils/functions/EventFormFunctions";
import styles from "./EventForm.module.scss";

export const EventForm = () => {
  const dispatch = useTypedDispatch();

  return (
    <Formik
      initialValues={getInitialValues()}
      validate={eventFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(addEvent(parseFormValues(values)));
        setSubmitting(false);
      }}
    >
      <Form className={styles.eventForm}>
        <h1 className={styles.formHeader}>Добавить мероприятие</h1>

        <div className={styles.formInputs}>
          <EventInput name="eventName" type="text" label="Название" />
          <EventInput name="eventDate" type="date" label="Дата" />
          <EventInput name="eventStart" type="time" label="Время начала" />
          <EventInput name="eventEnd" type="time" label="Время конца" />
        </div>

        <button className={styles.submitButton} type="submit">
          ДОБАВИТЬ
        </button>
      </Form>
    </Formik>
  );
};
