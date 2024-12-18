import { Dispatch, SetStateAction } from "react";

export type SetStateFunction<T> = Dispatch<SetStateAction<T>>;
export type SquareClasses = "shown" | "shownEdenMode" | "hidden" | "matched";
export type SquareSize = "small" | "big";

export type SelectedSquare = {
  id: string;
  image: string;
  setClassName?: SetStateFunction<SquareClasses>;
};

export type Nullable<T> = T | null;

export type Square = {
  square: JSX.Element;
  setClass?: SetStateFunction<SquareClasses>;
  getClassName?: SquareClasses;
  setContent?: SetStateFunction<string>;
};

export type SquareMap = Map<string, Square>;

export type SelectedSquaresInput = {
  firstSelectedSquare: Nullable<SelectedSquare>;
  secondSelectedSquare: Nullable<SelectedSquare>;
  squaresMap: SquareMap;
  setFirstSelectedSquare: SetStateFunction<Nullable<SelectedSquare>>;
  setSecondSelectedSquare: SetStateFunction<Nullable<SelectedSquare>>;
};

export type GameMode = "standard" | "edenMode";

export type BoardSize = "small" | "big";

export type Score = {
  id: number;
  name: string;
  value: number;
  boardSize: number;
  rank?: number;
};

export type HighScores = {
  four: Score[];
  six: Score[];
};
