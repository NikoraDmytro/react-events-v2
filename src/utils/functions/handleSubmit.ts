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
    console.log(err);
  }
};
