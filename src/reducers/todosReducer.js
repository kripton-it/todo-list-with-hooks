import uuid from "uuid/v4";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: uuid(), task: action.newTask, completed: false }];
    case "REMOVE":
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE_COMPLETED":
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "UPDATE":
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return todos;
  }
};

export default todosReducer;
