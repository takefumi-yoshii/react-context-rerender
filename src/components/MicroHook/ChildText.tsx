import React from "react";
import { TextContext } from "./TextProvider";
// ______________________________________________________
//
// Context に依存しているため汎用性が低い
// これより更に子階層にコンポーネントを切り出せば問題ない
//
export const ChildText = () => {
  console.log("ChildText");
  const text = React.useContext(TextContext);
  return <>{text}</>;
};
