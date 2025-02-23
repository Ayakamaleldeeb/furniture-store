import { useMutation, UseMutationOptions, MutateFunction } from "react-query";
import Axios from "@/helpers/Axios";
// import { TGenericResult } from "@/types/common";
type Data = {
  email: string;
  password: string;
};

type ResponseData = {
        email: string;
        displayName: string;
        token: string;
};

const login: MutateFunction<
  ResponseData,
  unknown,
  Data
> = async (login: Data) => {
  const { data }: { data: ResponseData } = await Axios.post(
    "/api/Account/login",
    login
  );
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const usePostLogin = (
  options?: UseMutationOptions<ResponseData, Error, Data>
) => {
  const data = useMutation(login, {
    ...options,
  });
  return data;
};
export default usePostLogin;