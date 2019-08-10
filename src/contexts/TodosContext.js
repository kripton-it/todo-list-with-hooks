import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import todosReducer from "../reducers/todosReducer";

const initialTodos = [];

const TodosContext = createContext();
const DispatchContext = createContext();

const TodosProvider = props => {
  const [todos, dispatch] = useLocalStorageReducer('todos', initialTodos, todosReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export { TodosContext, DispatchContext, TodosProvider };
