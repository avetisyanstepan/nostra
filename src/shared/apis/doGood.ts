import { DoGood } from "../domains";
import { getApi } from "./apiRoot";

export const getDoingGood = async (): Promise<DoGood[]> => {
  // const axiosRequestConfig = getRequestConfig({
  //     handleErrorLocally: true,
  // });
  const res = await getApi().get<any>(
    `/fazer-o-bems`
    // axiosRequestConfig,
  );
  console.log(res.data);
  return res.data;
};
