import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";
type CartItem = {
    furnitureId: string;
    name: string | null;
    price: number;
    quantity: number;
    pictureUrl: string | null;
  };
  
  type CartData = {
    id: string;
    userId: string | null;
    items: CartItem[];
  };
const getCart = async () => {
  const { data }: { data: CartData } = await Axios.get("/api/cart");
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const useGetCart = (
  //   { itemCode, selectedHub }: { itemCode: string; selectedHub: number },
  options?: UseQueryOptions<any, Error>
) => {
  const data = useQuery<any, Error, any>(
    //     ["return-to-office", itemCode, selectedHub],
    ["Get-cart"],
    getCart,
    {
      ...options,
    }
  );
  return data;
};
export default useGetCart;
