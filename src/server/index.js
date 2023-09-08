import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL + "/api",
});

Api.interceptors.response.use(
  function (response) {
    // 200 - 299
    // success toast => response.data?.data?.message
    return response;
  },
  function (error) {
    // 400 - 500
    // error toast => error?.message || "خطایی پیش آمده است لطفا مجددا تلاش نمایید."
    return Promise.reject(error);
  }
);

Api.interceptors.request.use(
  function (config) {
    // token
    const _user = localStorage.getItem("user");
    if (_user) config.headers.Authorization = `Bearer ${_user?.token}`;
    return config;
  },
  function (error) {
    // toast error => 
    return Promise.reject(error);
  }
);

export default Api;
