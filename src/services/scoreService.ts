import axios from "axios";
import { Score, HighScores } from "../types";
import { BACKEND_URL } from "../constants/backendUrl";
import { REQUEST_HEADERS } from "../constants/requestHeaders";

export const getTopTenScores = async (): Promise<HighScores> => {
  console.log(REQUEST_HEADERS);

  const response = await axios.get(`${BACKEND_URL}/score/top-ten`);

  return response.data;
};

export const createScore = async (
  scoreData: Partial<Score>
): Promise<Score> => {
  const response = await axios.post(`${BACKEND_URL}/score`, scoreData, {
    headers: REQUEST_HEADERS,
  });

  return response.data;
};

export const getRank = async (id: number): Promise<{ rank: number }> => {
  const response = await axios.get(`${BACKEND_URL}/score/${id}`, {
    headers: REQUEST_HEADERS,
  });
  return response.data;
};
