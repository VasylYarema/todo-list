import React from "react";
import { Box, List, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import { FilterType, SortType } from "../types/taskTypes";
import { useTasks } from "../context/TaskContext";
import { filterTasks, sortTasks } from "../utils/filterSortTasks";

type Props = {
  filter: FilterType;
  search: string;
  sortBy: SortType;
};

const TaskList: React.FC<Props> = ({ filter, search, sortBy }) => {
  const { tasks, toggleTaskStatus, deleteTask } = useTasks();

  // Apply filter and search logic
  const filteredTasks = filterTasks(tasks, filter, search);

  // Apply sorting logic
  const sortedTasks = sortTasks(filteredTasks, sortBy);

  return (
    <Box>
      {sortedTasks.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ my: 2 }}>
          No tasks found.
        </Typography>
      ) : (
        <List>
          {sortedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
              deleteTask={deleteTask}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default TaskList;
