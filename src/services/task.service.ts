import { API_URL } from "./api";

export const getAllTasks = async () => {
  const res = await API_URL.get("tasks/");
  return res.data;
};

export const createTask = async (titre: string) => {
  const res = await API_URL.post("tasks/", { titre });
  return res.data;
};

export const deleteTask = async (id: number) => {
  const res = await API_URL.delete(`tasks/${id}/`);
  return res.data;
};
