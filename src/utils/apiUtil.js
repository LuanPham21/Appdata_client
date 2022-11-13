import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/user/v1/",
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
