import axios from "axios";

const API_URL = "https://your-api-url.com/orders"; 

export const fetchOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
