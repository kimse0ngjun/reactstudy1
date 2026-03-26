import axios from "axios";

export const BoardApi = axios.create({
  baseURL: "http://localhost:8080/api/board",
  headers: { "Content-Type": "application/json" },
});
