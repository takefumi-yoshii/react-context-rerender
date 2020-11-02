import React from "react";
import { ChildCount } from "./ChildCount";
import { ChildText } from "./ChildText";
// ______________________________________________________
//
// GrandChild に propsdown していることで、
// rerender が発生してしまっている
//
type Props = {
  count: number;
  text: string;
};
export const Child: React.FC<Props> = (props) => {
  console.log("Child");
  return (
    <>
      <ChildCount count={props.count} />
      <br />
      <ChildText text={props.text} />
    </>
  );
};
