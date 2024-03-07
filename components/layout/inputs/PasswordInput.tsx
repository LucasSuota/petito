"use client";

import { PasswordInputProps } from "@/types/PasswordInputType";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const PasswordInput = ({
  name,
  label,
  register,
  registerName,
  error,
  helperText,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      {...register(`${registerName}`, {
        required: true,
        minLength: {
          value: 8,
        },
      })}
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
