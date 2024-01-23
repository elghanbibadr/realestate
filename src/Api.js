import axios from "axios";

// const baseURL = "https://api.soumaqar.sa/api/v1/";
const baseURL = "http://127.0.0.1:8000/api/v1/";
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((request) => {
  request.headers["Authorization"] =
    "Bearer " + localStorage.getItem("access_token");
  return Promise.resolve(request);
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       window.location.href = "/sign-in/";
//       return Promise.reject(error);
//     }
//     // specific error handling done elsewhere
//     return Promise.reject(error);
//   }
// );
export default axiosInstance;
