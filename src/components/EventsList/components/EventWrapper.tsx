import React, { useState } from "react";
import { Formik, Form } from "formik";
import { eventFormValidation } from "./../../../utils/validation/eventFormValidation";
import { Mode, EventWrapperProps } from "../../../shared/types/Props";
import { useTypedDispatch } from "../../../store/hooks";
import { edit } from "./../../../store/actionCreators/edit";
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
        dispatch(edit(event, parseFormValues(values, event.id)));
        setSubmitting(false);
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
