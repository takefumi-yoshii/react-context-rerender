import React from "react";
// ______________________________________________________
//
type CTX = {
  count: number;
  text: string;
  increment: () => void;
  handleChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
// ______________________________________________________
//
export const Context = React.createContext<CTX>({
  count: 0,
  text: "",
  increment: () => {},
  handleChangeText: () => {},
});
