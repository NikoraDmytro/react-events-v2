import React, { useState } from "react";
import { Formik, Form } from "formik";

import { useTypedDispatch } from "../../../../store/hooks";
import { editEvent } from "../../../../store/actionCreators/actionCreators";

import { Mode, EventWrapperProps } from "../../../../shared/types/Props";

import { getInitialValues } from "../../../../utils/functions/getInitialValues";
import { eventFormValidation } from "../../../../utils/validation/eventFormValidation";

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
        dispatch(editEvent({ ...values, id: event.id }));

        toggleMode();
        setSubmitting(false);
      }}
    >
      {({ handleReset }) => {
        const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
          const form = e.currentTarget;
          const target = e.relatedTarget;

          if (mode === "edit" && !form.contains(target)) {
            handleReset();
            toggleMode();
          }
        };

        return (
          <Form onBlur={handleBlur} tabIndex={5}>
            {children({ mode, event, toggleMode })}
          </Form>
        );
      }}
    </Formik>
  );
};
