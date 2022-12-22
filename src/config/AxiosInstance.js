import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:8080/api/`,
});

axios.interceptors.request.use((config) => {
  //   config.baseURL = `http://localhost:8080/api/`;
  config.headers["Authorization"] =
    `bearer ` + JSON.parse(localStorage.getItem("token"));

  return config;
});

export default axiosInstance;
