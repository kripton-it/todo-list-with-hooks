import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTask => {
    // const newTodoId = Math.max(...todos.map(({ id }) => id)) + 1;
    // const newTodoId = uuid();
    const newTodo = { id: uuid(), task: newTask, completed: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = todoId => {
    const filteredTodos = todos.filter(({ id }) => id !== todoId);
    setTodos(filteredTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const updateLocalStorage = () => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(updateLocalStorage, [todos]);

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
      <Grid
        container
        justify="center"
        style={{
          marginTop: "1rem"
        }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
