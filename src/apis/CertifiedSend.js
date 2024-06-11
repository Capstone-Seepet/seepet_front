import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("AccessToken");
    console.log(accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      console.log("accesstoken loss");
    }
    return config;
  },
  (error) => {
    console.log("error : ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
