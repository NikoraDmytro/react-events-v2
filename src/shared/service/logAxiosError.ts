import { AxiosError } from "axios";

export const logAxiosError = (error: AxiosError<Error>) => {
  if (error.response) {
    alert(error.response.data.message);
  } else if (error.request) {
    alert("Request error" + error.message);
  } else {
    alert(`${error.name} ${error.message}`);
  }
};
