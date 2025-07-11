import { useMutation, UseMutationOptions, MutateFunction } from "react-query";
import Axios from "@/helpers/Axios";

type RemoveCartData = {
  furnitureId: string;
};

type ResponseData = any;

const removeCartItem: MutateFunction<
  ResponseData,
  unknown,
  RemoveCartData
> = async (removeData: RemoveCartData) => {
  const { data }: { data: ResponseData } = await Axios.delete(
    `/api/Cart/remove`,
    {
      data: removeData // Send furnitureId in request body
    }
  );
  if (!data) {
    throw Error("Error removing cart item");
  }
  return data;
};

const useRemoveCartItem = (
  options?: UseMutationOptions<ResponseData, Error, RemoveCartData>
) => {
  const data = useMutation(removeCartItem, {
    ...options,
  });
  return data;
};

export default useRemoveCartItem; 