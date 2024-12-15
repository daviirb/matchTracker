import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.football-data.org/v4",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const API_KEY = "141e599da70c4a08bc53ce9891fbaaf3";
  if (API_KEY) {
    config.headers["X-Auth-Token"] = API_KEY;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na API:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

export default apiClient;
