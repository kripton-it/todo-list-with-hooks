import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [];

const TodosContext = createContext();

const TodosProvider = props => {
  const context = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
