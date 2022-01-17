import { Product } from "../domains";
import { getApi } from "./apiRoot";

export const getProducts = async (): Promise<Product[]> => {
  // const axiosRequestConfig = getRequestConfig({
  //     handleErrorLocally: true,
  // });
  const res = await getApi().get<any>(
    `/products`
    // axiosRequestConfig,
  );
  console.log(res.data);
  return res.data;
};
