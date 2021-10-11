import { FormikHelpers } from "formik";

export type EventFormValues = {
  eventName: string;
  eventStart: string;
  eventEnd: string;
  eventDate: string;
};

export type onSubmitProps = {
  values: EventFormValues;
  helpers: FormikHelpers<EventFormValues>;
};
