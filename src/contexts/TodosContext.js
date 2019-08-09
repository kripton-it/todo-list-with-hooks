import React, { createContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

const initialTodos = [];

const TodosContext = createContext();

const TodosProvider = props => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
