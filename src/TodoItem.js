import React from "react";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditingForm from "./EditingForm";

const TodoItem = ({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  updateTodo
}) => {
  const [isEditing, toggleIsEditing] = useToggleState();
  const listItem = (
    <>
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
    </>
  );

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditingForm
          id={id}
          task={task}
          updateTodo={updateTodo}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        listItem
      )}
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
