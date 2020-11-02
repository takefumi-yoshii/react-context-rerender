import React from "react";
import { CounterContext } from "./CounterProvider";
// ______________________________________________________
//
// CounterContext に依存しているため汎用性が低い
// これより更に子階層に
// 
export const ChildCount = () => {
  console.log("ChildCount");
  const count = React.useContext(CounterContext);
  return <>{count}</>;
};
