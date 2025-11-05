import axios from "axios";
import { API_BASE_URL } from "../config/config";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAll = async (endpoint) => {
  await apiClient.get(endpoint);
};

const addData = async (endpoint, data) => {
  await apiClient.post(endpoint, data);
};
export { getAll, addData };
