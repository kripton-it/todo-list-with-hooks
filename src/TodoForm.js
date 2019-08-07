import React from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ addTodo }) => {
  const [newTask, updateNewTask, resetNewTask] = useInputState("");
  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(newTask);
    resetNewTask();
  };

  return (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem"
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          value={newTask}
          onChange={updateNewTask}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
