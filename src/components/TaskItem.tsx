import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { TaskProps } from "../types/taskTypes";
import { CheckCircle, Cancel, Delete } from "@mui/icons-material";
import { formatDateTime } from "../utils/date";

const TaskItem: React.FC<TaskProps> = ({
  task,
  toggleTaskStatus,
  deleteTask,
}) => {
  return (
    <Card sx={{ mb: 2, backgroundColor: task.completed ? "#d4edda" : "#fff" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>
        <Typography variant="caption" display="block">
          {`Created: ${formatDateTime(task.createdAt)}`}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Button
            variant="contained"
            color={task.completed ? "secondary" : "success"}
            onClick={() => toggleTaskStatus(task.id)}
            startIcon={task.completed ? <Cancel /> : <CheckCircle />}
          >
            {task.completed ? "Undo" : "Complete"}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteTask(task.id)}
            startIcon={<Delete />}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
