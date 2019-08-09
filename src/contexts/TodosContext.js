import React, { createContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

const initialTodos = [];

const TodosContext = createContext();
const DispatchContext = createContext();

const TodosProvider = props => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export { TodosContext, DispatchContext, TodosProvider };
