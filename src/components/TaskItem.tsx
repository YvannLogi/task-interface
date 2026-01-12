import React from "react";
import type { Task } from "../types/Task";
import "../styles/task.css";
import { Box, Button } from "@mantine/core";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <Box className="task-item-content">
      {/**
         * <input
          type="checkbox"
          checked={task.task_done}
          readOnly
          style={{ width: "18px", height: "18px", cursor: "pointer" }}
        />
         */}
      <span
        className="task_text"
        style={{
          textDecoration: task.task_done ? "line-through" : "none",
          opacity: task.task_done ? 0.6 : 1,
        }}
      >
        {task.titre}
      </span>

      <Button
        variant="default"
        className="button-delete"
        onClick={() => task.id && onDelete(task.id)}
      >
        supprimer
      </Button>
    </Box>
  );
};
