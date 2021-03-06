import React from "react";
import { Formik, Form } from "formik";

import { ErrorBelowInput } from "../InputFields/ErrorBelowInput";

import { useTypedDispatch } from "../../store/hooks";

import { addEvent } from "../../store/actionCreators/actionCreators";

import { getInitialValues } from "../../utils/functions/getInitialValues";
import { eventFormValidation } from "../../utils/validation/eventFormValidation";

import styles from "./EventForm.module.scss";

export const EventForm = () => {
  const dispatch = useTypedDispatch();

  return (
    <Formik
      initialValues={getInitialValues()}
      validate={eventFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(addEvent(values));
        setSubmitting(false);
      }}
    >
      <Form className={styles.eventForm}>
        <h1 className={styles.formHeader}>Добавить мероприятие</h1>

        <div className={styles.formInputs}>
          <ErrorBelowInput name="eventName" type="text" label="Название" />
          <ErrorBelowInput name="eventDate" type="date" label="Дата" />
          <ErrorBelowInput name="eventStart" type="time" label="Время начала" />
          <ErrorBelowInput name="eventEnd" type="time" label="Время конца" />
        </div>

        <button className={styles.submitButton} type="submit">
          ДОБАВИТЬ
        </button>
      </Form>
    </Formik>
  );
};
