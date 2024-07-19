import { createContext } from "react";
import { GameMode, SquareMap } from "./types";

export const SquareMapContext = createContext<SquareMap>(new Map());

export const GameModeContext = createContext<{ mode: GameMode | null }>({
  mode: null,
});
