import axios from "axios";
import { Score, HighScores } from "../types";
import { BACKEND_URL } from "../constants/backendUrl";

export const getTopTenScores = async (): Promise<HighScores> => {
  const response = await axios.get(`${BACKEND_URL}/score/top-ten`);

  return response.data;
};

export const createScore = async (
  scoreData: Partial<Score>
): Promise<Score> => {
  const response = await axios.post(`${BACKEND_URL}/score`, scoreData);

  return response.data;
};

export const getRank = async (
  boardSize: number,
  value: number
): Promise<{ rank: number }> => {
  const response = await axios.get(
    `${BACKEND_URL}/score/${boardSize}/${value}`
  );
  return response.data;
};
