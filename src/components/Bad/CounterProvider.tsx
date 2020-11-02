import React from "react";
import { CounterContext } from "./CounterContext";
// ______________________________________________________
//
export const CounterProvider: React.FC = (props) => {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <CounterContext.Provider value={count}>
      {props.children}
      <hr />
      <button onClick={increment}>+1</button>
    </CounterContext.Provider>
  );
};
