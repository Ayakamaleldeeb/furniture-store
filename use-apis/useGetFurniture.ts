import { useQuery, UseQueryOptions } from "react-query";
import Axios from "@/helpers/Axios";
const getFurniture = async () => {
  const { data } = await Axios.get(
    "/api/Furniture",

  );
  if (!data) {
    throw Error("Error");
  }
  return data;
};
const useGetFurniture = (
//   { itemCode, selectedHub }: { itemCode: string; selectedHub: number },
  options?: UseQueryOptions<any, Error>
) => {
  const data = useQuery<any,Error,any>(
//     ["return-to-office", itemCode, selectedHub],
    ["Get-Furniture"],
    getFurniture,
{
        ...options,
}
  );
  return data;
};
export default useGetFurniture;