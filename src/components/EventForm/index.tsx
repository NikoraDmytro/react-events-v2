import React from "react";
import { Formik, Form } from "formik";
import { EventFormValues } from "../../shared/types/FormTypes";
import { eventFormValidation } from "../../utils/eventFormValidation";
import styles from "./EventForm.module.scss";
import { EventInput } from "./EventInputs/EventInput";

const initialValues: EventFormValues = {
  eventName: "",
  eventDate: "",
  eventStart: "",
  eventEnd: "",
};

export const EventForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={eventFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
