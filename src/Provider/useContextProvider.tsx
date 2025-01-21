import * as React from "react";

// Contextの型定義
interface ContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Contextの初期値を設定
const defaultValue: ContextType = {
  count: 0,
  setCount: () => {},
};

export const Context = React.createContext<ContextType>(defaultValue);

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};
