import { createContext } from "react";
import { SetStateFunction, SquareClasses } from "./types";

export const SquareMapContext = createContext<
  Record<
    string,
    {
      square: JSX.Element;
      setClass?: SetStateFunction<SquareClasses>;
      setContent?: SetStateFunction<string>;
    }
  >
>({});
