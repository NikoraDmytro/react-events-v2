import { Axios } from "./../../Axios";

import { EventFormValues } from "../types/FormTypes";
import { EventWithId } from "../../store/types/StateTypes";
import { AxiosError } from "axios";

const logError = (error: AxiosError<Error>) => {
  if (error.response) {
    console.log(error.response);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log(error.name);
    console.log(error.message);
  }
};

export const addEvent = async (values: EventFormValues) => {
  try {
    const response = await Axios.post<EventWithId>(`/events/create`, values);

    return response.data;
  } catch (err) {
    logError(err as AxiosError<Error>);

    throw err;
  }
};

export const editEvent = async (values: EventFormValues, id: String) => {
  try {
    const response = await Axios.put<EventWithId>(`/events/edit/${id}`, values);

    return response.data;
  } catch (err) {
    logError(err as AxiosError<Error>);

    throw err;
  }
};

export const deleteEvent = async (id: String) => {
  try {
    const response = await Axios.delete(`/events/delete/${id}`);

    return response.data;
  } catch (err) {
    logError(err as AxiosError<Error>);

    throw err;
  }
};
