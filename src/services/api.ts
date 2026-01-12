
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

export const getAllTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTask = async (titre: string) => {
  const res = await axios.post(API_URL, { titre });
  return res.data;
};

export const deleteTask = async (id: number) => {
  const res = await axios.delete(`${API_URL}${id}/`);
  return res.data;
};

const ApiService = {
  getAllTasks,
  createTask,
  deleteTask,
};

export default ApiService;
