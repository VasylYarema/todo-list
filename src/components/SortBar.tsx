import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { SortType } from "../types/taskTypes";

type SortBarProps = {
  sortBy: SortType;
  setSortBy: (sortBy: SortType) => void;
};

//TODO: create list dynamically
const SortBar: React.FC<SortBarProps> = ({ sortBy, setSortBy }) => {
  return (
    <ButtonGroup
      variant="outlined"
      fullWidth
      sx={{ mb: 2, backgroundColor: "#fff" }}
    >
      <Button
        variant={sortBy === SortType.DATE ? "contained" : "outlined"}
        onClick={() => setSortBy(SortType.DATE)}
      >
        Sort by Date
      </Button>
      <Button
        variant={sortBy === SortType.STATUS ? "contained" : "outlined"}
        onClick={() => setSortBy(SortType.STATUS)}
      >
        Sort by Status
      </Button>
    </ButtonGroup>
  );
};

export default SortBar;
