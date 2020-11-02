import React from "react";
import { Context } from "./Context";
// ______________________________________________________
//
export const ChildText: React.FC = () => {
  console.log("ChildText");
  const ctx = React.useContext(Context);
  return <>{ctx.text}</>;
};
//
// やりがちな React.memo 濫用パターン
// Provider が細分化されていれば、そもそも memo化 は必要ない
//
// ______________________________________________________
//
// const ChildTextComponent: React.FC<{ text: string }> = React.memo((props) => {
//   console.log("ChildText");
//   return <>{props.text}</>;
// });

// export const ChildText: React.FC = () => {
//   const ctx = React.useContext(Context);
//   return <ChildTextComponent text={ctx.text} />;
// };
