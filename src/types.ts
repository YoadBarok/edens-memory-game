import { Dispatch, SetStateAction } from "react";

export type SetStateFunction<T> = Dispatch<SetStateAction<T>>;
export type SquareClasses = "shown" | "hidden" | "matched" | "not-matched";
export type SquareSize = "small" | "big";
