import { MAX_SCORE } from "../constants/score";

export const calculateScore = (time: number, attemptCount: number) => {
  return Math.floor(MAX_SCORE / (time * attemptCount));
};
