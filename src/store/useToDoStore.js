"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useToDoStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (todo) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: Date.now(), taskName: todo, isDone: false },
          ],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => id !== task.id),
        })),
      doneTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
          ),
        })),
    }),
    {
      name: "todo-storage", // key in localStorage
    }
  )
);

export default useToDoStore;

