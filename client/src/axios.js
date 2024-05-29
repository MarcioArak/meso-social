import axios from "axios";

export const makeRequest = axios.create({
  baseURL: `https://jkljlkj.app/api/`,
  withCredentials: true,
});
