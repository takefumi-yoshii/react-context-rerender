import React from "react";
import { Context } from "./Context";
// ______________________________________________________
//
export const Provider: React.FC = (props) => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");
  const increment = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const handleChangeText = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(() => event.target.value);
    },
    []
  );
  return (
    <Context.Provider value={{ count, text, increment, handleChangeText }}>
      {props.children}
      <hr />
      <button onClick={increment}>+1</button>
      <hr />
      <input type="text" onChange={handleChangeText} />
    </Context.Provider>
  );
};
