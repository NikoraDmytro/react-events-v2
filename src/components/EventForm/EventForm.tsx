import React from "react";
import { Formik, Form } from "formik";

import { useTypedDispatch } from "../../store/hooks";

import { EventInput } from "../EventInput";

import { eventFormValidation } from "../../utils/validation/eventFormValidation";
import { getInitialValues } from "../../utils/functions/getInitialValues";
import { handleSubmit } from "./../../utils/functions/handleSubmit";

import styles from "./EventForm.module.scss";

export const EventForm = () => {
  const dispatch = useTypedDispatch();

  return (
    <Formik
      initialValues={getInitialValues()}
      validate={eventFormValidation}
      onSubmit={(values, helpers) => handleSubmit(values, helpers, dispatch)}
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
