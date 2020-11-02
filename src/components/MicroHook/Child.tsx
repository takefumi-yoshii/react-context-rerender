import React from "react";
import { ChildCount } from "./ChildCount";
import { ChildText } from "./ChildText";
// ______________________________________________________
//
// 子Component をいくつか内包しているが、
// props がなければ hooks もないため、
// この Component 起因で rerender は発生しえない
//
export const Child = () => {
  console.log("Child");
  return (
    <>
      <ChildCount />
      <br />
      <ChildText />
    </>
  );
};
