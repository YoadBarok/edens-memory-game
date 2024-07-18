import { createContext } from "react";
import { GameMode, SetStateFunction, SquareClasses } from "./types";

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

export const GameModeContext = createContext<{ mode: GameMode | null }>({
  mode: null,
});
