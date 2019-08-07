import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

const EditingForm = ({ id, task, updateTodo, toggleIsEditing }) => {
  const [value, updateValue, resetValue] = useInputState(task);
  const handleSubmit = evt => {
    evt.preventDefault();
    updateTodo(id, value);
    resetValue();
    toggleIsEditing();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginLeft: '1rem',
      width: '60%'
    }}>
      <TextField
        value={value}
        onChange={updateValue}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditingForm;
