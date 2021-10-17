import React, { useState } from "react";
import { Formik, Form } from "formik";
import { eventFormValidation } from "./../../../utils/validation/eventFormValidation";
import { Mode, EventWrapperProps } from "../../../shared/types/Props";
import { useTypedDispatch } from "../../../store/hooks";
import { addEvent, removeEvent } from "../../../store/reducers/eventsSlice";
import {
  getInitialValues,
  parseFormValues,
} from "./../../../utils/functions/EventFormFunctions";

export const EventWrapper = ({ event, children }: EventWrapperProps) => {
  const [mode, setMode] = useState<Mode>("read");
  const dispatch = useTypedDispatch();

  const toggleMode = () =>
    mode === "read" ? setMode("edit") : setMode("read");

  return (
    <Formik
      initialValues={getInitialValues(event)}
      validate={eventFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        if (mode === "edit") {
          dispatch(removeEvent(event));
          dispatch(addEvent(parseFormValues(values, event.id)));
        }
        toggleMode();
        setSubmitting(false);
      }}
    >
      {({ handleReset }) => (
        <Form>
          {children({ mode, toggleMode, event, resetForm: handleReset })}
        </Form>
      )}
    </Formik>
  );
};
