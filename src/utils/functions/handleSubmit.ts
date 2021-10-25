import { AxiosError } from "axios";
import { FormikHelpers } from "formik";

import { EventFormValues } from "../../shared/types/FormTypes";
import { Axios } from "./../../Axios";

import { EventWithId } from "../../store/types/StateTypes";
import { edit } from "./../../store/actionCreators/edit";
import { add } from "./../../store/actionCreators/add";
import { TypedDispatch } from "../../store/store";

export const handleSubmit = async (
  values: EventFormValues,
  { setSubmitting, setErrors }: FormikHelpers<EventFormValues>,
  dispatch: TypedDispatch,
  id?: string
) => {
  try {
    if (id) {
      const response = await Axios.put<[EventWithId, EventWithId]>(
        `/events/edit/${id}`,
        values
      );
      const [prevValue, newValue] = response.data;

      dispatch(edit(prevValue, newValue));
    } else {
      const newEvent = await Axios.post<EventWithId>(`/events/create`, values);

      dispatch(add(newEvent.data));
    }

    setSubmitting(false);
  } catch (err) {
    const response = (err as AxiosError<Error>).response;

    if (response && response.data.message === "Time is busy") {
      setErrors({
        eventStart: "Time is busy!",
        eventEnd: "Time is busy!",
      });
    } else {
      console.log(err);
    }
  }
};
