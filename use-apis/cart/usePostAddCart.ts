import { useMutation, UseMutationOptions, MutateFunction } from "react-query";
import Axios from "@/helpers/Axios";
type Data = {
      furnitureId: string;
      quantity: number;
};

type ResponseData = {
       
};

const addCart: MutateFunction<
  ResponseData,
  unknown,
  Data
> = async (addCart: Data) => {
  const { data }: { data: ResponseData } = await Axios.post(
    '/api/Cart/add',
    addCart
  );
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const usePostAddCart = (
  options?: UseMutationOptions<ResponseData, Error, Data>
) => {
  const data = useMutation(addCart, {
    ...options,
  });
  return data;
};
export default usePostAddCart;