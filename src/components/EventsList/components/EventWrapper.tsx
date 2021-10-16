import React, { useState } from "react";
import { Formik, Form } from "formik";
import { EventFormValues } from "../../../shared/types/FormTypes";
import { EventWithId } from "../../../store/types/StateTypes";
import { eventFormValidation } from "./../../../utils/validation/eventFormValidation";
import { EventProps } from "../../../shared/types/Props";

interface Props {
  event: EventWithId;
  children: (props: EventProps) => React.ReactNode;
}

type Mode = EventProps["mode"];

export const EventWrapper = ({ event, children }: Props) => {
  const [mode, setMode] = useState<Mode>("read");

  const toggleMode = () =>
    mode === "read" ? setMode("edit") : setMode("read");

  const initialValues: EventFormValues = {
    eventName: event.name,
    eventDate: event.date,
    eventStart: event.start,
    eventEnd: event.end,
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={eventFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      <Form>{children({ mode, toggleMode, event })}</Form>
    </Formik>
  );
};
