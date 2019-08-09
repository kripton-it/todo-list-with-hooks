import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "./contexts/TodosContext";

const EditingForm = ({ id, task, toggleIsEditing }) => {
  const { updateTodo } = useContext(TodosContext);
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
