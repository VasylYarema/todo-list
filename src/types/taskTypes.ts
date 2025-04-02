export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
};

export type TaskItemProps = {
  tasks: Task[];
  filter: FilterType;
  search: string;
};

export interface TaskProps {
  task: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
  };
  toggleTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

export type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
};

export enum FilterType {
  ALL = "all",
  COMPLETED = "completed",
  UNCOMPLETED = "uncompleted",
}

export enum SortType {
  DATE = "date",
  STATUS = "status",
}
