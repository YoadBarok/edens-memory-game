import { BoardSize } from "../types";

export const BOARD_SIZES = {
  small: 4,
  big: 6,
} as const satisfies { [key in BoardSize]: number };
