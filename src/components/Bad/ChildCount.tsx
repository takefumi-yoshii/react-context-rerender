import React from "react";
// ______________________________________________________
//
export const ChildCount: React.FC<{ count: number }> = (props) => {
  console.log("ChildCount");
  return <>{props.count}</>;
};
