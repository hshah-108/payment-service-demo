import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const createPayment = (payment) => {
  return axios.post(`${API_BASE_URL}/payments/`, payment);
};

export const getPayments = () => {
  return axios.get(`${API_BASE_URL}/payments/`);
};
