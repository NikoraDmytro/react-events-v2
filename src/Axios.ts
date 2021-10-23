import axios from "axios";

export const Axios = axios.create({
  url: "/events",
  method: "get",
  baseURL: "http://localhost:5000",
  timeout: 5000,
});
