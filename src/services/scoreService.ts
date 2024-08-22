import axios from "axios";
import { Score, HighScores } from "../types";

const backeendUrl = process.env.REACT_APP_BACKEND_URL;

export const getTopTenScores = async (): Promise<HighScores> => {
  const response = await axios.get(`${backeendUrl}/score/top-ten`);

  return response.data;
};

export const createScore = async (
  scoreData: Partial<Score>
): Promise<Score> => {
  const response = await axios.post(`${backeendUrl}/score`, scoreData);
  console.log(response.data);

  return response.data;
};

export const getRank = async (id: number): Promise<{ rank: number }> => {
  const response = await axios.get(`${backeendUrl}/score/${id}`);
  return response.data;
};
