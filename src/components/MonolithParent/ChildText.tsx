import React from "react";
// ______________________________________________________
//
// Context 非依存なため汎用性が高い
// このまま汎用的な atom として再利用することができる
//
export const ChildText: React.FC<{ text: string }> = (props) => {
  console.log("ChildText");
  return <>{props.text}</>;
};
