import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const TodoItem = ({ id, task, completed, removeTodo, toggleTodo }) => {
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        disableRipple
        tabIndex={-1}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
