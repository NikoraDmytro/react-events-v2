import { Axios } from "./../../Axios";

import { EventFormValues } from "../types/FormTypes";
import { EventWithId } from "../../store/types/StateTypes";

export const addEvent = async (values: EventFormValues) => {
  try {
    const response = await Axios.post<EventWithId>(`/events/create`, values);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const editEvent = async (values: EventFormValues, id: String) => {
  try {
    const response = await Axios.put<EventWithId>(`/events/edit/${id}`, values);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteEvent = async (id: String) => {
  try {
    const response = await Axios.delete(`/events/delete/${id}`);

    return response.data;
  } catch (err) {
    throw err;
  }
};
