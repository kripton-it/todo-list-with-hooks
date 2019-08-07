import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
/* import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid"; */
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <TodoItem {...todo} key={todo.id} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
