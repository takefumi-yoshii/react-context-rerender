import React from "react";
import { CounterContext } from "./CounterProvider";
// ______________________________________________________
//
// Context に依存しているため汎用性が低い
// これより更に子階層にコンポーネントを切り出せば問題ない
//
export const ChildCount = () => {
  console.log("ChildCount");
  const count = React.useContext(CounterContext);
  return <>{count}</>;
};
