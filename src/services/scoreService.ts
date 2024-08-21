import axios from "axios";

const backeendUrl = process.env.REACT_APP_BACKEND_URL;

export const getTopTenScores = async () => {
  const response = await axios.get(`${backeendUrl}/score/top-ten`);

  console.log(response.data);

  return response.data;
};
