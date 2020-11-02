import React from "react";
import { Child } from "./Child";
import { CounterContext } from "./CounterProvider";
import { TextContext } from "./TextProvider";
// ______________________________________________________
//
export const Parent: React.FC = () => {
  console.log("Parent");
  const count = React.useContext(CounterContext);
  const text = React.useContext(TextContext);
  return <Child count={count} text={text} />;
};
