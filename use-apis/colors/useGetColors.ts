import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";

type Color = {
  id: string;
  name: string;
}[];

const getColors = async () => {
  const { data }: { data: Color } = await Axios.get("/api/colors");
  if (!data) {
    throw Error("Error");
  }
  return data;
};

const useGetColors = (options?: UseQueryOptions<Color, Error>) => {
  return useQuery<Color, Error>(["colors"], getColors, {
    ...options,
  });
};

export default useGetColors;
