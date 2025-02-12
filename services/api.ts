import axios from "axios";

export const api = axios.create({
  baseURL: __DEV__
    ? "http://192.168.0.113:3333"
    : "https://dietaaibackend.onrender.com",
});
