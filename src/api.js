import axios from "axios";

const api = axios.create({
  baseURL: "https://producthub-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
