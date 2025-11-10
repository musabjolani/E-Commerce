import axios from "axios";
const API_BASE_URL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAll = async (endpoint) => {
  try {
    return (await apiClient.get(`${API_BASE_URL}/${endpoint}`)).data;
  } catch (error) {
    console.error(`Failed to get data from ${endpoint}:`, error);
    throw error;
  }
};

const addData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to add data to ${endpoint}:`, error);
    throw error;
  }
};

const updateData = async (endpoint, id, data) => {
  try {
    const response = await apiClient.put(
      `${API_BASE_URL}/${endpoint}/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to update data at ${endpoint}/${id}:`, error);
    throw error;
  }
};

export { getAll, addData, updateData };
