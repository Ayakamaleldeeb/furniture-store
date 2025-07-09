import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";

type Brand = {
  id: string;
  name: string;
}[];

const getBrands = async () => {
  const { data }: { data: Brand } = await Axios.get("/api/brands");
  if (!data) {
    throw Error("Error");
  }
  return data;
};

const useGetBrands = (options?: UseQueryOptions<Brand, Error>) => {
  return useQuery<Brand, Error>(["brands"], getBrands, {
    ...options,
  });
};

export default useGetBrands;
