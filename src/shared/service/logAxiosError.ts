import { AxiosError } from "axios";

export const logAxiosError = (error: AxiosError<Error>) => {
  if (error.response) {
    throw new Error(error.response.data.message);
  } else if (error.request) {
    throw new Error("Request error" + error.message);
  } else {
    throw new Error(error.message);
  }
};
