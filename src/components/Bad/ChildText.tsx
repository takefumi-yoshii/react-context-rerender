import React from "react";
// ______________________________________________________
//
export const ChildText: React.FC<{ text: string }> = (props) => {
  console.log("ChildText");
  return <>{props.text}</>;
};
