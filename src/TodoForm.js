import React from "react";
import useInputState from './hooks/useInputState';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ addTodo }) => {
  const [ newTask, updateNewTask, resetNewTask ] = useInputState("");
  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(newTask);
    resetNewTask();
  }

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={newTask} onChange={updateNewTask} />
      </form>
    </Paper>
  );
};

export default TodoForm;
