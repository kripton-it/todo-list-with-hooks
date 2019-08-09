import React, { Fragment, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";
import { TodosContext } from "./contexts/TodosContext";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  if (todos.length === 0) return null;
  
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <Fragment key={todo.id}>
            <TodoItem
              {...todo}
            />
            {index < todos.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
