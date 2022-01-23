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

          toggleMode();
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
