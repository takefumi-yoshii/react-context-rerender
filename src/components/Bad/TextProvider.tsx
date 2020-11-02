import React from "react";
import { TextContext } from "./TextContext";
// ______________________________________________________
//
export const TextProvider: React.FC = (props) => {
  const [text, setText] = React.useState("");
  const handleChangeText = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(() => event.target.value);
    },
    []
  );
  return (
    <TextContext.Provider value={text}>
      {props.children}
      <hr />
      <input type="text" onChange={handleChangeText} />
    </TextContext.Provider>
  );
};
