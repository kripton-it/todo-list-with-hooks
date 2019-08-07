import React, { useState } from "react";
import uuid from 'uuid/v4'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTask => {
    // const newTodoId = Math.max(...todos.map(({ id }) => id)) + 1;
    // const newTodoId = uuid();
    const newTodo = { id: uuid(), task: newTask, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = todoId => {
    const filteredTodos = todos.filter(({id}) => id !== todoId);
    setTodos(filteredTodos);
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => (
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
    setTodos(updatedTodos);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{
        marginTop: '1rem'
      }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
