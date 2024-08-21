import axios from "axios";

export const fetchImages = async (): Promise<string[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/images`
  );

  return response.data;
};
