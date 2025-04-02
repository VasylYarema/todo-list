import React, { useState } from "react";
import { TaskProvider } from "../context/TaskContext";
import { Container, Typography } from "@mui/material";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { FilterType, SortType } from "../types/taskTypes";
import SortBar from "../components/SortBar";

const TodoApp: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortType>(SortType.DATE);

  return (
    <TaskProvider>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" sx={{ my: 2 }}>
          ✅ Todo list
        </Typography>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
        <AddTask />
        <TaskList filter={filter} search={search} sortBy={sortBy} />
      </Container>
    </TaskProvider>
  );
};

export default TodoApp;
