import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import ApiService from "../services/api";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import {
  AppShell,
  Burger,
  Text,
  Title,
  Container,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Home = () => {
  const [opened, { toggle }] = useDisclosure();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadDatas = async () => {
      try {
        const data = await ApiService.getAllTasks();
        setTasks(data.results);
      } catch (err) {
        console.error("erreur dans le chargement dans le travai ..", err);
      }
    };
    loadDatas();
  }, []);

  const addTask = async (titre: string) => {
    try {
      const newTask = await ApiService.createTask(titre);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("erreur de l ajout de la tache", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await ApiService.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("erreur pendant la suppression du travail ..", error);
    }
  };

  return (
    <AppShell padding="md" header={{ height: 60 }} footer={{ height: 50 }}>
      <AppShell.Header mt={0} h={60} p="xs">
        <Header />
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
      </AppShell.Header>

      <AppShell.Main>
        <Container size="sm" my="md">
          <Title order={3} ta="center" mb="sm">
            Gestion des tâches
          </Title>

          <Divider my="sm" />

          <TaskForm taskAdd={addTask} />

          {tasks.length > 0 ? (
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          ) : (
            <Text ta="center" c="dimmed" mt="md">
              aucune tâche ajoutée pour l'instant.
            </Text>
          )}
        </Container>
      </AppShell.Main>

      <AppShell.Footer h={50} p="xs">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};
