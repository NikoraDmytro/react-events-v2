import React, { useState } from "react";
import { Formik, Form } from "formik";
import { AxiosError } from "axios";

import { useTypedDispatch } from "../../../../store/hooks";
import { edit } from "./../../../../store/actionCreators/edit";

import { editEvent } from "../../../../shared/service/eventsApi";
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
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const editedEvent = await editEvent(values, event.id);
          dispatch(edit(event, editedEvent));

          setSubmitting(false);
        } catch (err) {
          const error = err as AxiosError<Error>;
          const message = error.response?.data.message;

          if (message && message === "Time is busy") {
            setErrors({
              eventStart: "Time is busy!",
              eventEnd: "Time is busy!",
            });
          }

          console.log(error);
        }
      }}
    >
      {({ handleReset }) => {
        const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
          const parent = e.target.parentElement;
          const target = e.relatedTarget;

          if (mode === "edit" && parent && !parent.contains(target)) {
            handleReset();
            toggleMode();
          }
        };

        return (
          <Form onBlur={handleBlur}>
            {children({ mode, event, toggleMode })}
          </Form>
        );
      }}
    </Formik>
  );
};
