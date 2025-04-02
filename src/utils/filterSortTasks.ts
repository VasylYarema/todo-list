import { FilterType, SortType, Task } from "../types/taskTypes";

export function filterTasks(tasks: Task[], filter: FilterType, search: string): Task[] {
  return tasks
    .filter((task) => {
      // Filter tasks based on completion status
      if (filter === FilterType.COMPLETED) return task.completed;
      if (filter === FilterType.UNCOMPLETED) return !task.completed;
      return true; // Show all tasks if no filter is selected
    })
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase())); // Filter tasks by search text
}

export function sortTasks(tasks: Task[], sortBy: SortType): Task[] {
  return [...tasks].sort((a, b) => {
    if (sortBy === SortType.DATE) {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(); // Sort by creation date
    }
    if (sortBy === SortType.STATUS) {
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1; // Sort by completion status
    }
    return 0; // If no sort type is provided, return as is
  });
}

