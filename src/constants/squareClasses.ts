import { SquareClasses } from "../types";

export const SQUARE_CLASSES = {
  shown: "shown",
  shownEdenMode: "shownEdenMode",
  hidden: "hidden",
  matched: "matched",
} as const satisfies { [key in SquareClasses]: SquareClasses };
