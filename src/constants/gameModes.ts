import { GameMode } from "../types";

export const GAME_MODES = {
  standard: "standard",
  edenMode: "edenMode",
} as const satisfies { [key in GameMode]: GameMode };
