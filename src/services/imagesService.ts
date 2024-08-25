import axios from "axios";
import { BACKEND_URL } from "../constants/backendUrl";
import { REQUEST_HEADERS } from "../constants/requestHeaders";

export const fetchImages = async (): Promise<string[]> => {
  const response = await axios.get(`${BACKEND_URL}/images`, {
    headers: REQUEST_HEADERS,
  });

  return response.data;
};
