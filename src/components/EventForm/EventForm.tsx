import React from "react";
import { AxiosError } from "axios";
import { Formik, Form } from "formik";

import { EventInput } from "../EventInput";

import { useTypedDispatch } from "../../store/hooks";
import { add } from "./../../store/actionCreators/add";

import { addEvent } from "./../../shared/service/eventsApi";

import { getInitialValues } from "../../utils/functions/getInitialValues";
import { eventFormValidation } from "../../utils/validation/eventFormValidation";

import styles from "./EventForm.module.scss";

export const EventForm = () => {
  const dispatch = useTypedDispatch();

  return (
    <Formik
      initialValues={getInitialValues()}
      validate={eventFormValidation}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const newEvent = await addEvent(values);

          dispatch(add(newEvent));
          setSubmitting(false);
        } catch (err) {
          const error = err as AxiosError<Error>;

          if (error.response?.data.message === "Time is busy") {
            setErrors({
              eventStart: "Time is busy!",
              eventEnd: "Time is busy!",
            });
          }
        }
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
