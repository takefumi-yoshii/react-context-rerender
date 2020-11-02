import React from "react";
import { CounterContext } from "./CounterContext";
import { TextContext } from "./TextContext";
import { Child } from "./Child";
// ______________________________________________________
//
export const Parent: React.FC = () => {
  console.log("Parent");
  const count = React.useContext(CounterContext);
  const text = React.useContext(TextContext);
  return <Child count={count} text={text} />;
};
