import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, value, onChange, type = "text" }) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      type={type}
      sx={{ mb: 1, backgroundColor: "#fff" }}
    />
  );
};

export default CustomTextField;
