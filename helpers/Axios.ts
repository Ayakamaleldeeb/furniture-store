import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";

/** -------------------------------------------------------------------------- **/
/**        This file should have all axios instances, add more if needed       **/
/** -------------------------------------------------------------------------- **/

/** --------- Make sure to add their keys inside enviroment variables -------- **/

const baseURL: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const getToken = (): string | null => {
  const token = Cookies.get("token");
  // console.log("🚀 ~ getToken ~ token:", token);
  if (token) return `bearer ${token}`;
  return null;
};

const Axios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: getToken(),
  },
});

Axios.interceptors.response.use(
  function (response: AxiosResponse) {
    // console.log("response", response.data);
    // if (response.data.statusCode !== "0") {
    //   throw new Error(response.data.userFriendlyArabicMessage);
    // }
    return Promise.resolve(response);
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default Axios;
