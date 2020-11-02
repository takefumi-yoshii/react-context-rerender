import React from "react";
// ______________________________________________________
//
type CTX = [number, React.Dispatch<React.SetStateAction<number>>];
// ______________________________________________________
//
const Context = React.createContext<CTX>([0, () => {}]);
// ______________________________________________________
//
const Child: React.FC = (props) => {
  console.log("Child");
  const value = React.useContext(Context);
  return <>{value[0]}</>;
};

const Parent: React.FC = (props) => {
  console.log("Parent");
  // const value = React.useContext(Context)
  return <>{props.children}</>;
  // return <>{props.children}</>
};

const GrandParent: React.FC = (props) => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <Context.Provider value={[count, increment]}>
      {props.children}
      <button onClick={increment}>+1</button>
    </Context.Provider>
  );
};
// ______________________________________________________
//
const Page = () => (
  <GrandParent>
    <Parent>
      <Child />
    </Parent>
  </GrandParent>
);

export default Page;
