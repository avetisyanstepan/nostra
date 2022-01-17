import Axios, { AxiosInstance } from "axios";

export var baseURL: "http://localhost:8082/";

// let spApi: AxiosInstance = null;
export function getApi(mock = false): AxiosInstance {
  // if (spApi) return spApi;

  let spApi = Axios.create({
    baseURL: `http://localhost:8082/`,
    headers: {
      Accept: "*",
      // "Cache-Control": "no-cache; no-store; private",
      // "x-version": "1.0",
    },
    timeout: 10 * 1000,
  });

  spApi.interceptors.response.use(
    function handleData(response) {
      // Do something with response data
      return response;
    }
    // handleError
  );

  return spApi;
}
