import axios from "axios";

export const makeRequest = axios.create({
  baseURL: `http://social-media-production-5b7b.up.railway.app/api/`,
  withCredentials: true,
});
