import React from "react";
import { TextContext } from "./TextProvider";
// ______________________________________________________
//
export const ChildText = () => {
  console.log("ChildText");
  const text = React.useContext(TextContext);
  return <>{text}</>;
};
