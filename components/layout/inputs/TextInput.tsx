import { TextInputProps } from "@/types/TextInputProps";
import { TextField } from "@mui/material";

const TextInput = ({
  name,
  label,
  type = "text",
  register,
  registerName,
  error,
  helperText,
}: TextInputProps) => {
  return (
    <TextField
      {...register(`${registerName}`, { required: true })}
      name={name}
      label={label}
      type={type}
      error={error}
      helperText={helperText}
    />
  );
};

export default TextInput;
