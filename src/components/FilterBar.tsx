import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { List, CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { FilterType } from "../types/taskTypes";

type FilterBarProps = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

//TODO: create list dynamically
const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
  return (
    <ButtonGroup fullWidth sx={{ mb: 2, backgroundColor: "#fff" }}>
      <Button
        variant={filter === FilterType.ALL ? "contained" : "outlined"}
        onClick={() => setFilter(FilterType.ALL)}
        startIcon={<List />}
      >
        {FilterType.ALL}
      </Button>
      <Button
        variant={filter === FilterType.COMPLETED ? "contained" : "outlined"}
        onClick={() => setFilter(FilterType.COMPLETED)}
        startIcon={<CheckCircle />}
      >
        {FilterType.COMPLETED}
      </Button>
      <Button
        variant={filter === FilterType.UNCOMPLETED ? "contained" : "outlined"}
        onClick={() => setFilter(FilterType.UNCOMPLETED)}
        startIcon={<RadioButtonUnchecked />}
      >
        {FilterType.UNCOMPLETED}
      </Button>
    </ButtonGroup>
  );
};

export default FilterBar;
