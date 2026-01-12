import React, { useCallback, useState } from "react";
import { TextInput, Button, Box, Flex } from "@mantine/core";

interface TaskFormProps {
  taskAdd: (titre: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ taskAdd }) => {
  const [titre, setTitre] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const blankTitre = titre.trim();

      if (!blankTitre) return;

      taskAdd(blankTitre);
      setTitre("");
    },
    [titre, taskAdd]
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      style={{ maxWidth: 500, margin: "20px auto" }}
      mb="xl"
    >
      <Flex align="center" gap="md">
        <TextInput
          placeholder="saisr pour ajouter une nouvelle tâche..."
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          size="md"
          aria-label="newTask"
          style={{ width: 600 }}
        />

        <Button
          style={{ width: 50, backgroundColor: "#255D8F" }}
          type="submit"
          disabled={!titre.trim()}
          size="xs"
        >
          Ok
        </Button>
      </Flex>
    </Box>
  );
};
