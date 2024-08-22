import axios from "axios";
import { BACKEND_URL } from "../constants/backendUrl";

export const fetchImages = async (): Promise<string[]> => {
  const response = await axios.get(`${BACKEND_URL}/images`);

  return response.data;
};
