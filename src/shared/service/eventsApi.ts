import { AxiosError } from "axios";

import { Axios } from "./../../Axios";
import { logAxiosError } from "./logAxiosError";

import { EventFormValues } from "../types/FormTypes";
import { EventWithId } from "../../store/types/StateTypes";

const add = async (values: EventFormValues) => {
  try {
    const response = await Axios.post<EventWithId>(`/events/create`, values);
    const addedEvent = response.data;

    return addedEvent;
  } catch (err) {
    logAxiosError(err as AxiosError<Error>);

    throw err;
  }
};

const edit = async (values: EventFormValues & { id: String }) => {
  try {
    const response = await Axios.put<EventWithId>(
      `/events/edit/${values.id}`,
      values
    );
    const editedEvent = response.data;

    return editedEvent;
  } catch (err) {
    logAxiosError(err as AxiosError<Error>);

    throw err;
  }
};

const remove = async (id: String) => {
  try {
    const response = await Axios.delete<EventWithId>(`/events/delete/${id}`);
    const deletedEvent = response.data;

    return deletedEvent;
  } catch (err) {
    logAxiosError(err as AxiosError<Error>);

    throw err;
  }
};

const fetch = async () => {
  try {
    const response = await Axios.get<EventWithId[]>("/events");
    const fetchedEvents = response.data;

    return fetchedEvents;
  } catch (err) {
    logAxiosError(err as AxiosError<Error>);

    throw err;
  }
};

export const eventApi = {
  addEvent: add,
  editEvent: edit,
  removeEvent: remove,
  fetchEvents: fetch,
};
