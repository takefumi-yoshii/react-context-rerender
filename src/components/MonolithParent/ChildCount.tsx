import React from "react";
// ______________________________________________________
//
// Context 非依存なため汎用性が高い
// このまま汎用的な atom として再利用することができる
//
export const ChildCount: React.FC<{ count: number }> = (props) => {
  console.log("ChildCount");
  return <>{props.count}</>;
};
