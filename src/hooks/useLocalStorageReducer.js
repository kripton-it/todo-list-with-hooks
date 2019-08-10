import { useReducer, useEffect } from "react";

export default (key, defaultValue, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (error) {
      value = defaultValue;
    }

    return value;
  });

  const updateLocalStorage = () => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch(error) {

    }
  };

  useEffect(updateLocalStorage, [state]);

  return [state, dispatch];
};
