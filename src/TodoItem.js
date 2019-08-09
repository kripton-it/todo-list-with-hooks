import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditingForm from "./EditingForm";
import { TodosContext } from "./contexts/TodosContext";

const TodoItem = ({ id, task, completed }) => {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggleIsEditing] = useToggleState();
  const listItem = (
    <>
      <Checkbox
        checked={completed}
        disableRipple
        tabIndex={-1}
        onClick={() =>
          dispatch({
            type: "TOGGLE_COMPLETED",
            id
          })
        }
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
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditingForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        listItem
      )}
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() =>
            dispatch({
              type: "REMOVE",
              id
            })
          }
        >
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
