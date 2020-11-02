import React from "react";
import { Context } from "./Context";
// ______________________________________________________
//
export const ChildCount: React.FC = () => {
  console.log("ChildCount");
  const ctx = React.useContext(Context);
  return <>{ctx.count}</>;
};
//
// やりがちな React.memo 濫用パターン
// Provider が細分化されていれば、そもそも memo化 は必要ない
//
// ______________________________________________________
//
// const ChildCountComponent: React.FC<{ count: number }> = React.memo((props) => {
//   console.log("ChildCount");
//   return <>{props.count}</>;
// });

// export const ChildCount: React.FC = () => {
//   const ctx = React.useContext(Context);
//   return <ChildCountComponent count={ctx.count} />;
// };
