import { AxiosError } from "axios";

export const logAxiosError = (error: AxiosError<Error>) => {
  if (error.response) {
    console.log(error.response);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log(error.name);
    console.log(error.message);
  }
};
