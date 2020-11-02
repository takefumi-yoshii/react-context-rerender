import React from "react";
// ______________________________________________________
//
export const Parent: React.FC = (props) => {
  console.log("Parent");
  return <>{props.children}</>;
};
