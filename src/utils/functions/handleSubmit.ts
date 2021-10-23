import { EventFormValues } from "../../shared/types/FormTypes";
import { EventWithId } from "../../store/types/StateTypes";
import { Axios } from "./../../Axios";
import { FormikHelpers } from "formik";
import { TypedDispatch } from "../../store/store";
import { edit } from "./../../store/actionCreators/edit";
import { add } from "./../../store/actionCreators/add";

export const handleSubmit = async (
  values: EventFormValues,
  { setSubmitting }: FormikHelpers<EventFormValues>,
  dispatch: TypedDispatch,
  previousValues?: EventWithId
) => {
  try {
    if (previousValues) {
      const id = previousValues.id;

      const editedEvent = await Axios.put<EventWithId>(
        `/events/edit/${id}`,
        values
      );

      dispatch(edit(previousValues, editedEvent.data));
    } else {
      const newEvent = await Axios.post<EventWithId>(`/events/create`, values);

      dispatch(add(newEvent.data));
    }

    setSubmitting(false);
  } catch (err) {
    console.log(err);
  }
};
