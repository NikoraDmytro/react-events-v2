import React, { useState } from "react";
import { Formik, Form } from "formik";

import { useTypedDispatch } from "../../../../store/hooks";

import { Mode, EventWrapperProps } from "../../../../shared/types/Props";

import { handleSubmit } from "../../../../utils/functions/handleSubmit";
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
      onSubmit={(values, helpers) =>
        handleSubmit(values, helpers, dispatch, event.id)
      }
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
