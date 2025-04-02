import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Task, TaskContextType } from "../types/taskTypes";

const TaskContext = createContext<TaskContextType | null>(null);

// TaskProvider component that wraps around the application to provide task-related state
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  // Function to add a new task
  const addTask = (task: Task) => setTasks([...tasks, task]);

  // Function to update an existing task
  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task: Task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  // Function to delete a task by its id
  const deleteTask = (id: string) => setTasks(tasks.filter((task: Task) => task.id !== id));

  // Function to toggle the completed status of a task by its id
  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map((task: Task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to access the TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTasks must be used within a TaskProvider");

  return context;
};
