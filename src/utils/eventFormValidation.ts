import { addYears, format } from "date-fns";
import { EventFormValues } from "../shared/types/FormTypes";

const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export const eventFormValidation = (values: EventFormValues) => {
  const errors: Partial<typeof values> = {};

  if (!values.eventName) {
    errors.eventName = "Required!";
  } else if (values.eventName.length > 30) {
    errors.eventName = "Must be less than 30 characters long!";
  }

  if (!values.eventDate) {
    errors.eventDate = "Required!";
  } else if (values.eventDate < formatDate(new Date())) {
    errors.eventDate = "Event should not take place in past!";
  } else if (values.eventDate > formatDate(addYears(new Date(), 2))) {
    errors.eventDate = "Planning event two years in advance is nonsense!";
  }

  if (!values.eventStart) {
    errors.eventStart = "Required!";
  } else if (values.eventStart < "09:00") {
    errors.eventStart = "Minimum start time - 09:00!";
  }

  if (!values.eventEnd) {
    errors.eventEnd = "Required!";
  } else if (values.eventEnd > "18:00") {
    errors.eventEnd = "Maximum end time - 18:00!";
  } else if (values.eventStart && values.eventStart >= values.eventEnd) {
    errors.eventEnd = "End time must be bigger than start time!";
  }

  return errors;
};
