import { useState } from "react";
import uuid from "uuid/v4";

export default (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newTask => {
      setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);
    },
    removeTodo: todoId => {
      setTodos(todos.filter(({ id }) => id !== todoId));
    },
    toggleTodo: todoId => {
      setTodos(
        todos.map(todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    updateTodo: (todoId, newTask) => {
      setTodos(
        todos.map(todo =>
          todo.id === todoId ? { ...todo, task: newTask } : todo
        )
      );
    }
  };
};
