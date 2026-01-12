import React from "react";
import type { Task } from "../types/Task";
import { TaskItem } from "./TaskItem";
import { Stack } from "@mantine/core";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <Stack gap="sm" mt="md">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </Stack>
  );
};
