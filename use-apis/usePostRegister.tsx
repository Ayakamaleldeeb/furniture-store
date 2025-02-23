import { useMutation, UseMutationOptions, MutateFunction } from "react-query";
import Axios from "@/helpers/Axios";
// import { TGenericResult } from "@/types/common";
type Data = {
  email: string;
userName: string;
  password: string;
displayName: string;
phoneNumber: string;
};

type ResponseData = {
        email: string;
        displayName: string;
        token: string;
};
// type ErrorData={
//     errors:string[],
//     statusCode: number,
//     message: string
// }
const register: MutateFunction<
  ResponseData,
  unknown,
  Data
> = async (register: Data) => {
  const { data }: { data: ResponseData } = await Axios.post(
    "/api/Account/register",
    register
  );
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const usePostRegister = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: UseMutationOptions<ResponseData, any, Data>
) => {
  const data = useMutation(register, {
    ...options,
  });
  return data;
};
export default usePostRegister;