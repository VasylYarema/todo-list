import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useTasks } from "../context/TaskContext";
import CustomTextField from "./UI/CustomTextField";
import { Add } from "@mui/icons-material";

const AddTask: React.FC = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    if (!title) return;
    addTask({
      id: Date.now().toString(),
      title,
      description,
      createdAt: new Date().toISOString(),
      completed: false,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <Box sx={{ mb: 2 }}>
      <CustomTextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CustomTextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        startIcon={<Add />}
      >
        Add task
      </Button>
    </Box>
  );
};

export default AddTask;
